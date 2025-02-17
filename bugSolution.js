```javascript
//In your main app.js file
import 'tailwindcss/tailwind.css';

function App() {
  return (
    <div className="bg-red-500 p-4">
      <p>Hello world</p>
    </div>
  );
}

export default App;

// Make sure you have tailwindcss and autoprefixer installed:
// npm install -D tailwindcss autoprefixer

//Then run this to generate the tailwind.css file
//npx tailwindcss init -p

//Also update your tailwind.config.js file to match your project structure
```