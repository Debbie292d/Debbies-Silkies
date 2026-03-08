# Debbie's Silkies — Hatching & Breeding Tracker

This is your personal chicken tracker! It lets you keep track of your breeder pens, incubation batches, hatch dates, and hatch rates — all in one place.

---

## How to Set Up and Open Your Tracker

There are **three steps** — and after the first two (which you only do once), opening your tracker is just one double-click!

---

### Step 1 — Install Node.js (one-time, do this first)

Node.js is a free program that makes the tracker run. You only install it once.

1. Go to **https://nodejs.org** in your browser
2. Click the big button that says **"LTS"**
3. Download and run the installer — click **Next** all the way through and then **Finish**

---

### Step 2 — Download and unzip the tracker (one-time)

1. Click this link to download the tracker:

   👉 **[Download Debbies-Silkies.zip](https://github.com/Debbie292d/Debbies-Silkies/archive/refs/heads/copilot/add-chicken-tracker-component.zip)**

   > If the link doesn't work, paste this into your browser:
   > `https://github.com/Debbie292d/Debbies-Silkies/archive/refs/heads/copilot/add-chicken-tracker-component.zip`

2. Open your **Downloads** folder, right-click the ZIP file, and click **"Extract All..."**

3. When the dialog box appears, change the destination to your Desktop — type:
   ```
   C:\Users\YourName\Desktop
   ```
   (Replace `YourName` with your actual Windows username — for example `Owner`.) Then click **Extract**.

4. A folder will appear on your Desktop. Open it. Keep opening any folder you see inside until you find one that contains these files: `package.json`, `README.md`, and a folder called `app`. **That is your tracker folder.**

5. Right-click that folder and rename it to **`Debbies-Silkies`**.

---

### Step 3 — Set up the tracker (one-time, just double-click!)

Inside your `Debbies-Silkies` folder you'll see a file called:

> 📄 **INSTALL - Run this first.bat**

**Double-click it.** A black window will open and you'll see text scrolling. That's normal — it's installing the tracker. When it says **"All done!"**, you can close the window.

> ⚠️ If Windows asks "Do you want to allow this app to make changes?" or shows a blue warning screen, click **"More info"** and then **"Run anyway"**. This is safe — it's just installing the tracker files.

---

### Every time you want to use the tracker — just double-click! 🐔

Inside your `Debbies-Silkies` folder you'll see a file called:

> 📄 **START - Click to open tracker.bat**

**Double-click it.** Wait a few seconds until you see a line that says:
```
Local:  http://localhost:3000
```

Then open your browser and go to: **http://localhost:3000**

**Your Chicken Tracker will open!** 🎉

---

### When you're done for the day

Just **close the black window** that opened when you double-clicked START. That shuts down the tracker safely.

---

## Quick-Start Cheat Sheet

Once you've done the one-time setup above, here's all you need:

| What to do | How |
|---|---|
| Start the tracker | Double-click **START - Click to open tracker.bat** |
| Open it in your browser | Go to `http://localhost:3000` |
| Stop the tracker | Close the black window |

---

## Troubleshooting

### The black window flashes and disappears immediately

This usually means Node.js is not installed yet. Go back to **Step 1** and install it from https://nodejs.org.

### I see a blue "Windows protected your PC" warning

Click **"More info"**, then click **"Run anyway"**. This warning appears because the file was downloaded from the internet — it is safe to run.

### The browser says "This site can't be reached"

The black tracker window may have closed or not finished starting up. Double-click **START - Click to open tracker.bat** again and wait until you see the `http://localhost:3000` line before opening your browser.

### Something else isn't working

Make sure:
- You ran **INSTALL - Run this first.bat** at least once before trying to start the tracker
- Node.js is installed (you can check by pressing the Windows key, typing `cmd`, pressing Enter, and typing `node --version` — you should see a number like `v20.x.x`)
