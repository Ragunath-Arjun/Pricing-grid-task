import logo from './logo.svg';
import './App.css';
import Pricinggrid from './Pricinggrid';

function App() {
  let details=[
    {
      name:"FREE",
      plan:0,
      plandetails:[
        {
          title:"Single User",
          fonticon:true,


        },
        {
          title:"5GB Storage",
          fonticon:true,


        },
        {
          title:"Unlimited Public Projects",
          fonticon:true,


          
        },
        {
          title:"Community Access",
          fonticon:true,


        },
        {
          title:"Unlimited Private Projects",
          tick:true,

        },
        {
          title:"Dedicated Phone Support",
          tick:true,

        },
        {
          title:"Free Subdomain",
          tick:true,

        },
        {
          title:"Monthly Status Reports",
          tick:true,

        }
      ]
    },
    {
      name:"PLUS",
      plan:9,
      plandetails:[
        {
          title:"5 Users",
          fonticon:true,
          fontwei:true,

        },
        {
          title:"50GB Storage",
          fonticon:true,

        },
        {
          title:"Unlimited Public Projects",
          fonticon:true,

        },
        {
          title:"Community Access",
          fonticon:true,

        },
        {
          title:"Unlimited Private Projects",
          fonticon:true,

        },
        {
          title:"Dedicated Phone Support",
          fonticon:true,

        },
        {
          title:"Free Subdomain",
          fonticon:true,

        },
        {
          title:"Monthly Status Reports",
          tick:true
        }
      ]
    },
    {
      name:"PRO",
      plan:49,
      plandetails:[
        {
          title:"Unlimited Users",
          fonticon:true,
          fontwei:true,

        },
        {
          title:"150GB Storage",
          fonticon:true,

        },
        {
          title:"Unlimited Public Projects",
          fonticon:true,

        },
        {
          title:"Community Access",
          fonticon:true,

        },
        {
          title:"Unlimited Private Projects",
          fonticon:true,

        },
        {
          title:"Dedicated Phone Support",
          fonticon:true,

        },
        {
          title:"Free Subdomain",
          fonticon:true,

        },
        {
          title:"Monthly Status Reports",
          fonticon:true
        }
      ]
    }

]
// console.log(details.plandetails.title);

  return (
  <>
  <div className='container'>
    <div className='row mt-5'>
      {
        details.map((card)=>{
        return <Pricinggrid card={card}/>
        })
        
        }
    </div>
  </div>
    </>
  )
}

export default App;
