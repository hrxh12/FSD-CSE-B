import ReactDOM from 'react-dom/client'
import './App.css'
function Book(){
    return(
        <div className="card">
            <img src="" width="200" height="200" alt="book-img"/>
            <h3>Title: Physics</h3>
            <h4>Price: ₹381</h4>
            <button>ADD TO CART</button>
        </div>
    );
}

const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);
root.render(<Book/>)