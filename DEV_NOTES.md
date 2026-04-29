# DEV NOTES - Job Dashboard

## 📅 Day 1 - Setup & Structure

### ✅ What I Did
- Setup Vite + React project
- Created folder structure (components, pages, services)
- Built JobPage skeleton

### 🧠 What I Learned
- React apps should have a clear separation between pages and components
- Parent component should manage state

### ⚠️ Problems Faced
- Confusion between UI vs logic components

### 💡 Fix / Insight
- Pages handle logic, components handle UI

---

## 📅 Day 2 - Job Listing

### ✅ What I Did
- Built JobList and JobCard components
- Used `.map()` to render list

### 🧠 What I Learned
- React renders arrays of components
- `key` prop is required for lists

### ⚠️ Problems Faced
- Tried string-based rendering (wrong approach): return "<p>Not found</p>";
- Missed return statement on .map
- Name conflict between component and state const

### 💡 Fix / Insight
- Always use JSX, not strings (return <p>Not found</p>)
- Ensure .map() the map returns the elements

---

## 🔁 Concepts to Revise Later
- useEffect dependencies
- props vs state
- component reusability

---

## 🎤 Interview Talking Points
- Built a modular React app with clear separation of concerns
- Implemented dynamic list rendering using map
- Designed reusable components (JobCard, JobList)