"use client";

import { useState, useEffect } from "react";

export default function ChickenTracker() {

  const breederPens = ["Pen 1","Pen 2","Pen 3","Pen 4","Pen 5","Pen 6"];
  const incubators = ["Brinsea 56EX #1","Brinsea 56EX #2","Brinsea 56EX #3 (Hatcher)"];

  const [pens,setPens] = useState<Record<string,string>>({});
  const [penBirds,setPenBirds] = useState<Record<string,string>>({});

  interface BatchSet {
    batchName: string;
    species: string;
    setDate: string;
    hatchDate: string;
    lockdownDate: string;
    eggsSet: number | string;
    infertileRemoved: number | string;
    deadRemoved: number | string;
    eggsHatched: number | string;
    fertileEggs: number | string;
    rate: number | string;
    pen: string;
    incubator: string;
    notes: string;
  }

  const [sets,setSets] = useState<BatchSet[]>([]);
  const [editingIndex,setEditingIndex] = useState<number|null>(null);

  // Load saved data from localStorage on first render
  useEffect(()=>{
    try {
      const savedPens = localStorage.getItem("debbies-silkies-pens");
      if(savedPens) {
        const parsed = JSON.parse(savedPens);
        setPens(parsed);
        setPenBirds(parsed); // pre-fill inputs so saved birds are visible right away
      }
      const savedSets = localStorage.getItem("debbies-silkies-sets");
      if(savedSets) setSets(JSON.parse(savedSets));
    } catch(e) {
      console.warn("Could not load saved tracker data:", e);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  // Save pens to localStorage whenever they change
  useEffect(()=>{
    localStorage.setItem("debbies-silkies-pens", JSON.stringify(pens));
  },[pens]);

  // Save sets to localStorage whenever they change
  useEffect(()=>{
    localStorage.setItem("debbies-silkies-sets", JSON.stringify(sets));
  },[sets]);

  const [species,setSpecies] = useState("Chicken");
  const [setDate,setSetDate] = useState("");
  const [eggsSet,setEggsSet] = useState<number | string>("");
  const [infertileRemoved,setInfertileRemoved] = useState<number | string>("");
  const [deadRemoved,setDeadRemoved] = useState<number | string>("");
  const [eggsHatched,setEggsHatched] = useState<number | string>("");

  const [setPen,setSetPen] = useState("Pen 1");
  const [incubator,setIncubator] = useState("Brinsea 56EX #1");
  const [batchName,setBatchName] = useState("");
  const [notes,setNotes] = useState("");

  const hatchDays: Record<string,number> = {
    Chicken:21,
    Duck:28,
    Turkey:28,
    Goose:30,
    Guinea:26,
    Peafowl:28
  };

  const lockdownDays: Record<string,number> = {
    Chicken:18,
    Duck:25,
    Turkey:25,
    Goose:27,
    Guinea:23,
    Peafowl:25
  };

  const savePen = (pen: string)=>{
    setPens({...pens,[pen]:penBirds[pen]||""});
  };

  const addSet = ()=>{

    if(!setDate) return;

    const set = new Date(setDate);

    const hatch = new Date(set);
    hatch.setDate(hatch.getDate()+hatchDays[species]);

    const lockdown = new Date(set);
    lockdown.setDate(lockdown.getDate()+lockdownDays[species]);

    const fertileEggs = Number(eggsSet) - Number(infertileRemoved || 0);

    const rate = fertileEggs && eggsHatched
      ? Math.round((Number(eggsHatched) / fertileEggs) * 100)
      : "";

    const newSet: BatchSet = {
      batchName,
      species,
      setDate,
      hatchDate:hatch.toISOString().slice(0,10),
      lockdownDate:lockdown.toISOString().slice(0,10),
      eggsSet,
      infertileRemoved,
      deadRemoved,
      eggsHatched,
      fertileEggs,
      rate,
      pen:setPen,
      incubator,
      notes
    };

    if(editingIndex !== null) {
      const updated = [...sets];
      updated[editingIndex] = newSet;
      setSets(updated);
      setEditingIndex(null);
    } else {
      setSets([...sets,newSet]);
    }

    setSetDate("");
    setEggsSet("");
    setInfertileRemoved("");
    setDeadRemoved("");
    setEggsHatched("");
    setBatchName("");
    setNotes("");
  };

  const startEdit = (index: number)=>{
    const s = sets[index];
    setBatchName(s.batchName);
    setSpecies(s.species);
    setSetDate(s.setDate);
    setEggsSet(s.eggsSet);
    setInfertileRemoved(s.infertileRemoved);
    setDeadRemoved(s.deadRemoved);
    setEggsHatched(s.eggsHatched);
    setSetPen(s.pen);
    setIncubator(s.incubator);
    setNotes(s.notes);
    setEditingIndex(index);
    window.scrollTo({top:0,behavior:"smooth"});
  };

  const cancelEdit = ()=>{
    setEditingIndex(null);
    setBatchName("");
    setSpecies("Chicken");
    setSetDate("");
    setEggsSet("");
    setInfertileRemoved("");
    setDeadRemoved("");
    setEggsHatched("");
    setSetPen("Pen 1");
    setIncubator("Brinsea 56EX #1");
    setNotes("");
  };

  const deleteSet = (index: number)=>{
    if(!window.confirm("Delete this batch? This cannot be undone.")) return;
    setSets(sets.filter((_,i)=>i!==index));
    if(editingIndex===index) setEditingIndex(null);
  };

  const daysRemaining = (date: string)=>{

    const today = new Date();
    const hatch = new Date(date);

    const diff = Math.ceil((hatch.getTime() - today.getTime())/(1000*60*60*24));

    return diff;

  };

  const incubatorView = (name: string): (BatchSet & {_index: number})[] =>{

    return sets
      .map((s,i)=>({...s,_index:i}))
      .filter(s=>s.incubator===name);

  };

  const penStats = (pen: string)=>{

    const penSets = sets.filter(s=>s.pen===pen && s.fertileEggs && s.eggsHatched);

    if(penSets.length===0) return "-";

    const totalFertile = penSets.reduce((a,b)=>a+Number(b.fertileEggs),0);
    const totalHatched = penSets.reduce((a,b)=>a+Number(b.eggsHatched),0);

    return Math.round((totalHatched/totalFertile)*100);

  };


  return (

  <div className="p-6 space-y-10">

  <h1 className="text-3xl font-bold">Debbie&apos;s Silkies</h1>


  <div className="border p-4 rounded-2xl">

  <h2 className="text-xl font-semibold mb-3">Breeder Pens</h2>

  <div className="space-y-2">
  {breederPens.map(p=>(
  <div key={p} className="flex items-center gap-2">
    <span className="w-16 font-medium">{p}</span>
    <input
      placeholder="Birds in this pen"
      value={penBirds[p]||""}
      onChange={(e)=>setPenBirds({...penBirds,[p]:e.target.value})}
      className="border p-1 w-80"
    />
    <button onClick={()=>savePen(p)} className="border px-3 py-1">Save</button>
    {pens[p] && pens[p].trim() && <span className="text-green-700 text-sm">✓ Saved</span>}
  </div>
  ))}
  </div>

  <ul className="mt-4 list-disc pl-6">
  {breederPens.map(p=>(
  <li key={p}>{p}: {pens[p]||<span className="text-gray-400 italic">not entered yet</span>} | Hatch Rate: {penStats(p)}%</li>
  ))}
  </ul>

  </div>


  <div className="border p-4 rounded-2xl">

  <h2 className="text-xl font-semibold mb-3">{editingIndex !== null ? "Edit Batch" : "Add Incubation Batch"}</h2>

  <div className="flex flex-wrap gap-2">

  <input
  placeholder="Batch Name"
  value={batchName}
  onChange={(e)=>setBatchName(e.target.value)}
  className="border p-1"
  />

  <select value={species} onChange={(e)=>setSpecies(e.target.value)} className="border p-1">

  <option>Chicken</option>
  <option>Duck</option>
  <option>Turkey</option>
  <option>Goose</option>
  <option>Guinea</option>
  <option>Peafowl</option>

  </select>

  <select value={setPen} onChange={(e)=>setSetPen(e.target.value)} className="border p-1">
  {breederPens.map(p=>(<option key={p}>{p}</option>))}
  </select>

  <select value={incubator} onChange={(e)=>setIncubator(e.target.value)} className="border p-1">
  {incubators.map(i=>(<option key={i}>{i}</option>))}
  </select>

  <input type="date" value={setDate} onChange={(e)=>setSetDate(e.target.value)} className="border p-1" />

  <input type="number" placeholder="Eggs Set" value={eggsSet} onChange={(e)=>setEggsSet(e.target.value === "" ? "" : Number(e.target.value))} className="border p-1 w-24" />

  <input type="number" placeholder="Infertile (removed)" value={infertileRemoved} onChange={(e)=>setInfertileRemoved(e.target.value === "" ? "" : Number(e.target.value))} className="border p-1 w-28" />

  <input type="number" placeholder="Deaths" value={deadRemoved} onChange={(e)=>setDeadRemoved(e.target.value === "" ? "" : Number(e.target.value))} className="border p-1 w-20" />

  <input type="number" placeholder="Hatched" value={eggsHatched} onChange={(e)=>setEggsHatched(e.target.value === "" ? "" : Number(e.target.value))} className="border p-1 w-20" />

  <input placeholder="Notes" value={notes} onChange={(e)=>setNotes(e.target.value)} className="border p-1" />

  <button onClick={addSet} className="border px-3 py-1">{editingIndex !== null ? "Update" : "Add"}</button>

  {editingIndex !== null && (
  <button onClick={cancelEdit} className="border px-3 py-1 text-gray-500">Cancel</button>
  )}

  </div>

  </div>


  <div className="border p-4 rounded-2xl">

  <h2 className="text-xl font-semibold mb-3">Incubator Dashboard</h2>

  <div className="grid md:grid-cols-3 gap-4">

  {incubators.map(i=> (

  <div key={i} className="border rounded-xl p-3">

  <h3 className="font-bold mb-2">{i}</h3>

  {incubatorView(i).map((s,index)=>(

  <div key={index} className="border-b pb-1 mb-1">

  <div><b>{s.batchName}</b></div>

  <div>{s.species} | {s.pen}</div>

  <div>Lockdown: {s.lockdownDate}</div>

  <div>Hatch: {s.hatchDate}</div>

  <div>Countdown: {daysRemaining(s.hatchDate)} days</div>

  <div>Set: {s.eggsSet} | Fertile: {s.fertileEggs}</div>

  <div>Deaths: {s.deadRemoved} | Hatched: {s.eggsHatched}</div>

  <div>Hatch Rate: {s.rate}%</div>

  <div className="flex gap-2 mt-1">
  <button onClick={()=>startEdit(s._index)} className="border px-2 py-0.5 text-sm">Edit</button>
  <button onClick={()=>deleteSet(s._index)} className="border px-2 py-0.5 text-sm text-red-600">Delete</button>
  </div>

  </div>

  ))}

  </div>

  ))}

  </div>

  </div>


  </div>

  );

}
