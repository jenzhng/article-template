
import './index.css';


const Contact = () => {
  
  return (
   <>
   
     <form className = "contact">
       <h2>CONTACT US</h2>
       <div className="row">
       <div className="col-25">
       <label id="fname">First Name*</label>
       </div>
      <div className="col-75">
        <input type="text" placeholder="Full Name" name="name" className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" required/>
        </div>
        </div>
        <div className="row">
        <div className="col-25">
       <label id="email">Email*</label>
       </div>
      <div className="col-75">
        <input type="email" placeholder="Email" name="email" className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" required/>
      </div>
      </div>
      <div className="row">
      <div className="col-25">
       <label id="number">Phone Number</label>
       </div>
      <div className="col-75">
        <input type="text" placeholder="Phone Number" name="number" className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
      </div>
      </div>
      <div className="row">
      <div className="col-25">
       <label id="message">Message</label>
       </div>
      <div className="col-75">
      <textarea id="textbox" placeholder="Your message" name="message" className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" required/>
      </div>
      </div>
      <div className="row"> 
      <div id="requiredf">
       *Required fields
       </div> 
      </div>
      <div className="row">      
      <button className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="submit">
        Submit
      </button>
      </div>
     </form> 
   </>
  );
}

export default Contact;
