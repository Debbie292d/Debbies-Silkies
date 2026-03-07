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

**Easiest way — click this direct download link:**

👉 **[Download Debbies-Silkies.zip](https://github.com/Debbie292d/Debbies-Silkies/archive/refs/heads/main.zip)**

That link will immediately download a ZIP file called `Debbies-Silkies-main.zip`.

Once it's downloaded:
1. Find the ZIP file in your **Downloads** folder
2. Double-click it to unzip it — a new folder called `Debbies-Silkies-main` will appear
3. Move that folder somewhere easy to find, like your **Desktop** or **Documents** folder

---

> **Can't use the link above? Here's the manual way:**
> 1. Go to **https://github.com/Debbie292d/Debbies-Silkies**
> 2. Look for a button that says **"<> Code"** — it's in the upper-right area of the file list, above the list of files. It may be green or dark depending on your screen.
> 3. Click it — a small menu drops down
> 4. Scroll to the bottom of that menu and click **"Download ZIP"**
> 5. Unzip the downloaded file as described above

---

### Step 3 — Install the tracker's dependencies (one-time setup)

1. Open a **Terminal** (Mac) or **Command Prompt** (Windows)
2. Navigate to the folder you unzipped. For example, if you moved it to your Desktop:
   - **Mac:** `cd ~/Desktop/Debbies-Silkies-main`
   - **Windows:** `cd C:\Users\YourName\Desktop\Debbies-Silkies-main`
   
   > **Tip:** Not sure of the exact path? On **Windows**, open the folder in File Explorer, then click in the address bar at the top — you'll see the full path. Copy it and paste it after `cd `. On **Mac**, drag the folder into the Terminal window after typing `cd ` (with a space).
3. Type this command and press Enter:

```
npm install
```

Wait for it to finish (it may take a minute). You'll see a lot of text scroll by — that's normal!

---

### Step 4 — Start the tracker 🐔

Every time you want to use your tracker, do this:

1. Open a **Terminal** / **Command Prompt**
2. Navigate to your project folder (same as Step 3 above — the `Debbies-Silkies-main` folder)
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
