import React from 'react';
// import React from 'react'
import Calculator from './Calculator'

const CalculatorParent = () => {
  return (
    <div>
        <Calculator/>
    </div>
  )


// import React, { useState } from 'react';

// const App = () => {
//     const [displayedNumbers, setDisplayedNumbers] = useState([]);

//     const handleClick = (event) => {
//       const number = parseInt(event.target.textContent, 10);
//       setDisplayedNumbers(prevNumbers => [...prevNumbers, number]);
//     };
  
//     const calculateSum = () => {
//       return displayedNumbers.reduce((acc, current) => acc + current, 0);
//     };
  
//     return (
//       <div>
//         <button onClick={handleClick}>100</button>
//         <button onClick={handleClick}>200</button>
//         {/* <button onClick={handleClick}>300</button>
//         <button onClick={handleClick}>400</button>
//         <button onClick={handleClick}>500</button> */}
//         <div>
//           <h2>Numbers:</h2>
//           <ul>
//             {displayedNumbers.map((number, index) => (
//               <li key={index}>{number}</li>
//             ))}
//           </ul>
//           <div>
//             <h2>Sum:</h2>
//             <div>{calculateSum()}</div>
//           </div>
//         </div>
//       </div>
//     );
//   };
// export default App;

}

export default CalculatorParent