# Debbie's Silkies — Hatching & Breeding Tracker

This is your personal chicken tracker! It lets you keep track of your breeder pens, incubation batches, hatch dates, and hatch rates — all in one place.

---

## How to Open Your Chicken Tracker

You only need to do these steps **once** to get set up. After that, opening it is just two quick commands.

---

### Step 1 — Install Node.js (one-time setup)

Node.js is a free program that runs the tracker on your computer.

1. Go to **https://nodejs.org**
2. Click the big green button that says **"LTS"** (that's the stable version)
3. Download and run the installer — just click **Next** all the way through

To check it worked, open a **Terminal** (Mac) or **Command Prompt** (Windows) and type:

```
node --version
```

You should see a number like `v20.x.x`. If you do, you're good to go!

---

### Step 2 — Download this project (one-time setup)

**Click the blue link below to download the tracker — it will start immediately:**

👉 **[Download Debbies-Silkies.zip](https://github.com/Debbie292d/Debbies-Silkies/archive/refs/heads/copilot/add-chicken-tracker-component.zip)**

> **If the link above doesn't look clickable**, copy and paste this address into your web browser:
> ```
> https://github.com/Debbie292d/Debbies-Silkies/archive/refs/heads/copilot/add-chicken-tracker-component.zip
> ```
> Pasting it in your browser and pressing Enter will download the ZIP right away.

Once it's downloaded, extract it using these steps on **Windows**:

1. Open your **Downloads** folder in File Explorer
2. **Right-click** the ZIP file (named `Debbies-Silkies-copilot-add-chicken-tracker-component.zip`)
3. Click **"Extract All..."**
4. In the box that appears, clear whatever is there and type `C:\Users\YourName\Desktop` (replace `YourName` with your actual Windows username, e.g. `Owner`), then click **Extract**

> ⚠️ **Windows double-folder warning:** Windows sometimes creates an extra outer folder with the same long name. After extracting, open the folder on your Desktop. If you see **another folder inside it with the same long name**, go into that inner folder — that is where the real tracker files are. You'll know you're in the right place when you can see a file called `package.json` and a folder called `app`.

5. Once you've found the folder containing `package.json`, **rename it to `Debbies-Silkies`** by right-clicking it and choosing **Rename**

---

### Step 3 — Install the tracker's dependencies (one-time setup)

1. Open **Command Prompt**: press the **Windows key**, type `cmd`, and press Enter
2. Type the following command and press Enter to navigate to your tracker folder:
   ```
   cd C:\Users\YourName\Desktop\Debbies-Silkies
   ```
   (Replace `YourName` with your actual Windows username — for example, if your username is `Owner`, it would be `C:\Users\Owner\Desktop\Debbies-Silkies`.)
   > **Tip:** Not sure of the exact path? In File Explorer, open the `Debbies-Silkies` folder, then click in the address bar at the top — you'll see the full path. Copy it and paste it after `cd `.
3. Type this command and press Enter:

```
npm install
```

Wait for it to finish (it may take a minute). You'll see a lot of text scroll by — that's normal!

---

### Step 4 — Start the tracker 🐔

Every time you want to use your tracker, do this:

1. Open a **Terminal** / **Command Prompt**
2. Navigate to your project folder (same as Step 3 above — the `Debbies-Silkies` folder)
3. Type this command and press Enter:

```
npm run dev
```

4. Wait a few seconds until you see a message like:

```
▲ Next.js ready
- Local: http://localhost:3000
```

5. Open your web browser (Chrome, Firefox, Edge, Safari — any of them)
6. Go to this address: **http://localhost:3000**

**Your Chicken Tracker will open!** 🎉

---

### Step 5 — Stop the tracker when you're done

When you're finished, go back to the Terminal and press:

```
Ctrl + C
```

(Hold the **Ctrl** key and press **C**.) This shuts down the tracker safely.

---

## Quick-Start Cheat Sheet

Once you've done the one-time setup above, here's all you need every time:

| What to do | Command |
|---|---|
| Start the tracker | `npm run dev` |
| Open it in your browser | Go to `http://localhost:3000` |
| Stop the tracker | Press `Ctrl + C` in the Terminal |

---

## Need Help?

If something isn't working, check that:
- Node.js is installed (`node --version` shows a number)
- You are in the correct project folder in your Terminal
- You ran `npm install` at least once before running `npm run dev`

---

## Troubleshooting

### "Could not read package.json" when running `npm install`

This means you are in the wrong folder. Windows sometimes creates a double-nested folder when extracting a ZIP — the real tracker files are one level deeper.

In your Command Prompt, type this and press Enter:

```
cd Debbies-Silkies-copilot-add-chicken-tracker-component
```

Then run `npm install` again. If it works, that inner folder is the right one — go back to Step 2 and rename it to `Debbies-Silkies` so things are easier next time.

### Not sure which folder to be in?

The correct folder will contain a file called `package.json`. In File Explorer, navigate into your tracker folder. If you can see `package.json` listed there, you're in the right place. Copy the address bar path and use it with `cd` in Command Prompt.
