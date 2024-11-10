import Image from "next/image"

function HomePage(){
  return(
  <div>
   <Image
        src="/artificial-intelligence-3706562_1280.jpg"
        alt="Image"
        width={1100} 
        height={500} 
        id="main_image"
        priority
        />

     <h1 id="heading">Wellcome to SynapticAI</h1>

   <p id="text">Welcome to SynapticAI, a cutting-edge platform inspired by the neural pathways of the human brain.
     Our mission is to bring the intelligence of machines closer tohuman-like decision-making through advanced
     deep learning and neural networks.
    <br />
       At our core, we replicate the adaptive nature of human synapses-learning from data,
      strengthening over time, and continuously evolving.
      Our platform is designed to solve complex problems, uncover hidden patterns,
      and provide insights that empower businesses, researchers, and developers to achieve
       groundbreaking innovations.
       </p> 
       
       <h1>our portfolio</h1>
       <div id="portfolio">
        <span id="port"> 
          <Image
           src="/health.jpg"
           alt="Intelligent Data Analysis for healthcare" id="portimg"
           width={400}
           height={300}
           priority
           />
          <h4>Intelligent Data Analysis for Healthcare </h4>
        </span>
        <span id="port">
        <Image
         src="/language.png"
         alt="Natural Language Processing for Customer Support" 
         width={400}
         height={300}
         id="portimg"
         priority
         />
        <h4>Natural Language Processing for Customer Support</h4>
        </span>
        <span id="port">
        <Image
         src="/mechanics.jpg"
         alt="Predictive Maintenance for Manufacturing"
         width={400}
         height={300}
         id="portimg"
         priority
         />
         <h4>Predictive Maintenance for Manufacturing</h4>
        </span>
        <span id="port">
          <Image
           src="/industries.webp" 
           alt="Smart Energy Management System for Industrial Facilities"
           width={400}
           height={300}
           id="portimg"
           priority
            />
          <h4>Smart Energy Management System for Industrial Facilities</h4>
        </span>
       </div>
  </div>
)
}
export default HomePage

