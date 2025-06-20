import { useState } from 'react'
import './App.css'
import Nav from './nav.jsx'
import Content from './content.jsx'
import Myinfo from './myinfo.jsx'
function Home(){
  const friends=[
    {id:1,color:"blue",dp:"EM",title:"Emma Thompson",time:"12:45 PM",info:"I've sent you the latest project ja efvja SJLnoaien  vsdjnvjnaswqvsdjldsv ljn ",status:"online"},
    {id:2,color:"green",dp:"MJ",title:"Michael Johnson",time:"Yesterday",info:"Are we still meeting for coffee to deasjqewonefqnp OVEWAO",status:"offline"},
    {id:3,color:"purple",dp:"SL",title:"Sophia Lee",time:"Yesterday",info:"The Design Team loved your presentation dacnqn jenne ",status:"online"},
    {id:4,color:"orange",dp:"RB",title:"Robert Brown",time:"Tuesday",info:"Can you review the Budget Property fojweinfwonkrk ndffe",status:""},
    {id:5,color:"pink",dp:"AW",title:"Amelia Wilson",time:"Monday",info:"Thanks for your help with the client efqjbqewrwbnaejn",status:""},
    {id:6,color:"blue",dp:"DM",title:"Daniel Martinez",time:"May 25",info:"Lets's Schedule a call to discuss to ewnrenaqwbdnfno",status:""}
  ]
  const chatData = {
  "Emma Thompson": [
    { sender: "me", message: "Morning! The final version of the slides is ready. I emailed them just now—please go through and let me know if you spot anything off or would like to make changes.", time: "10:00 AM" },
    { sender: "Emma Thompson", message: "Thanks a lot! I’m opening them now. Really excited to see the changes you made after yesterday’s discussion. Hope the updated timeline slide looks cleaner.", time: "10:02 AM" },
    { sender: "me", message: "Definitely. I redid the visuals and simplified the chart labels. Let me know before the 11 AM sync if you'd like any tweaks.", time: "10:03 AM" },
    { sender: "Emma Thompson", message: "Can we revise the chart on slide 5? I think the Y-axis labels are still a bit cramped when presenting on mobile.", time: "10:05 AM" },
    { sender: "me", message: "Sure, I’ll regenerate that chart with higher spacing and send a new version within 15 minutes.", time: "10:07 AM" },
    { sender: "Emma Thompson", message: "Appreciate the quick turnaround! I’m stepping out for a quick coffee. Should be back in 10 minutes.", time: "10:10 AM" },
    { sender: "me", message: "Coffee sounds great right now. I’ll take this time to touch up slide 8 too. ☕", time: "10:11 AM" },
    { sender: "Emma Thompson", message: "Client moved the project sync to 3 PM instead of 2. I just saw their email.", time: "Yesterday" },
    { sender: "me", message: "Thanks! That gives me time to polish the comparison table.", time: "Yesterday" },
    { sender: "Emma Thompson", message: "Let’s send the final version of the deck by 1 PM so that they have enough time to review before the sync.", time: "Monday" },
    { sender: "me", message: "Absolutely. I’ll coordinate with the design team to get the latest visual assets too.", time: "Monday" },
    { sender: "Emma Thompson", message: "Please also include May 25’s action items. They were crucial during the kickoff.", time: "May 25" },
    { sender: "me", message: "Included already and linked to relevant sections. Tagged you on Notion for visibility.", time: "May 25" },
    { sender: "Emma Thompson", message: "Awesome. I’ll double-check everything before we present.", time: "May 25" },
    { sender: "me", message: "Thanks! We’ve got this. 🔥", time: "May 25" }
  ],

  "Michael Johnson": [
    { sender: "Michael Johnson", message: "Morning! Overnight logs are clean. Zero downtime and all endpoints were responsive.", time: "9:10 AM" },
    { sender: "me", message: "Great. I cross-checked with our alert dashboard—no spikes in error rates either.", time: "9:12 AM" },
    { sender: "Michael Johnson", message: "Perfect. I’ll do a staging sweep next to confirm patch effects before pushing live.", time: "9:14 AM" },
    { sender: "me", message: "Sounds good. Let’s roll out to production by noon if everything holds.", time: "9:16 AM" },
    { sender: "Michael Johnson", message: "Will coordinate with DevOps. Also—logs showed a few retries on Auth service. Minor, but flagging.", time: "9:17 AM" },
    { sender: "me", message: "Thanks for catching that. I'll ping the auth team to double-check their queue management.", time: "9:18 AM" },
    { sender: "Michael Johnson", message: "Velocity this sprint has been solid. Feels like we’re finally back in a rhythm.", time: "Yesterday" },
    { sender: "me", message: "Yeah. Removing those legacy hooks helped a lot with stability too.", time: "Yesterday" },
    { sender: "Michael Johnson", message: "DB upgrade got approved Monday. Indexing performance is already up 12%.", time: "Monday" },
    { sender: "me", message: "Awesome. Let’s log that for the review meeting.", time: "Monday" },
    { sender: "Michael Johnson", message: "Uploaded May 25 regression test logs to the drive in case QA needs reference.", time: "May 25" },
    { sender: "me", message: "Thanks! I’ll pass that to QA during standup.", time: "May 25" },
    { sender: "Michael Johnson", message: "All yours. Let’s keep things this smooth moving forward.", time: "May 25" }
  ],

  "Sophia Lee": [
    { sender: "Sophia Lee", message: "Uploaded updated concept variants to Figma, including A/B tests with a cleaner call-to-action layout.", time: "11:05 AM" },
    { sender: "me", message: "Checking now… Concept B’s layout flows really well, especially the hero section and footer alignment.", time: "11:08 AM" },
    { sender: "Sophia Lee", message: "That’s the one I’m leaning toward too. It has a modern but grounded look.", time: "11:10 AM" },
    { sender: "me", message: "Let’s finalize it then. Can you export assets and prep component naming for dev handoff?", time: "11:12 AM" },
    { sender: "Sophia Lee", message: "Sure! You’ll have all exports before lunch, with organized layers and color styles.", time: "11:13 AM" },
    { sender: "me", message: "By the way, Legal confirmed the brand palette’s approval?", time: "11:15 AM" },
    { sender: "Sophia Lee", message: "Yes, they gave the go-ahead yesterday. No trademark issues flagged.", time: "Yesterday" },
    { sender: "me", message: "Perfect. That clears our last blocker. Great work!", time: "Yesterday" },
    { sender: "Sophia Lee", message: "This feels like May 25 again—everything lining up beautifully.", time: "May 25" },
    { sender: "me", message: "Haha yes, that sprint was one for the books.", time: "May 25" },
    { sender: "Sophia Lee", message: "Let’s keep the momentum going!", time: "May 25" }
  ],

  "Robert Brown": [
    { sender: "me", message: "Are we set for the 3 PM partner demo? Slides and prototype walkthrough ready?", time: "8:00 AM" },
    { sender: "Robert Brown", message: "All locked in. Prototype is running smoothly and slides were reviewed last night.", time: "8:02 AM" },
    { sender: "me", message: "Great. Let’s keep our presentation under 15 minutes so we have time for Q&A.", time: "8:03 AM" },
    { sender: "Robert Brown", message: "Agreed. I trimmed a few redundant intro slides to get straight to value.", time: "8:04 AM" },
    { sender: "me", message: "Perfect. That’ll help us make a stronger impact.", time: "8:05 AM" },
    { sender: "Robert Brown", message: "Love how we’re always on the same wavelength. Makes working together easy.", time: "8:06 AM" },
    { sender: "me", message: "Any updates from the UX team before we lock final design?", time: "Yesterday" },
    { sender: "Robert Brown", message: "Yes, they signed off on the layout and content structure. We’re good to go.", time: "Yesterday" },
    { sender: "me", message: "Nice. Compared to May 25, this feels like night and day in terms of coordination.", time: "May 25" },
    { sender: "Robert Brown", message: "Yeah. It’s rewarding to see such improvement in such a short time.", time: "May 25" }
  ],

  "Amelia Wilson": [
    { sender: "Amelia Wilson", message: "Shared the final budget spreadsheet. It's in your inbox with categorized breakdowns and quarterly projections.", time: "12:45 PM" },
    { sender: "me", message: "Got it. I’m reviewing now. Everything looks solid. Great job on tracking vendor expenses.", time: "12:47 PM" },
    { sender: "Amelia Wilson", message: "Thanks! Let’s include it in the 4 PM report and send it to finance before EOD.", time: "12:48 PM" },
    { sender: "me", message: "Will do. Do you want me to add a summary paragraph or do you already have one written?", time: "12:49 PM" },
    { sender: "Amelia Wilson", message: "Can you take that? You’re better with summary writing. I’ll double-check the figures meanwhile.", time: "12:50 PM" },
    { sender: "me", message: "Sure. I’ll get something concise and clear ready by 1 PM.", time: "12:51 PM" },
    { sender: "Amelia Wilson", message: "Client requested May 25 metrics again. Please forward them ASAP.", time: "Yesterday" },
    { sender: "me", message: "Will do. I have them archived already. Sending now.", time: "Yesterday" },
    { sender: "Amelia Wilson", message: "Thanks. With that, Monday’s review meeting should go smoothly.", time: "Monday" },
    { sender: "me", message: "Exactly. We’re in a good spot.", time: "Monday" }
  ],

  "Daniel Martinez": [
    { sender: "Daniel Martinez", message: "Quick note—the new interns are confused by the onboarding. Can we simplify the checklist?", time: "10:00 AM" },
    { sender: "me", message: "Sure. I’ll create a walkthrough PDF with screenshots. Sending it shortly.", time: "10:02 AM" },
    { sender: "Daniel Martinez", message: "Awesome. They're having trouble with Git access and local setup mostly.", time: "10:04 AM" },
    { sender: "me", message: "I'll include step-by-step Git setup instructions and a checklist for repo access.", time: "10:05 AM" },
    { sender: "Daniel Martinez", message: "Thanks! Also, kudos on the new dashboard design. It’s getting good feedback.", time: "10:06 AM" },
    { sender: "me", message: "Appreciate it. The May 25 mockups helped guide a lot of the layout structure.", time: "May 25" },
    { sender: "Daniel Martinez", message: "Exactly. That was a pivotal reference. Glad we saved those drafts.", time: "May 25" },
    { sender: "me", message: "Same here. I’ve kept everything archived neatly in case we need to revisit.", time: "May 25" }
  ]
};
  const [cht,setchat]=useState(chatData);
  const [presentfriend, setpresentfriend] = useState(friends[0]);
  const [inputvalue,setinputvalue]=useState("");
  const [overlay,setoverlay]=useState(false);
  return (
    <div className='app'>
      <Nav overlay={overlay} setoverlay={setoverlay}></Nav>
      <Content cht={cht} setchat={setchat} data={friends} friend={presentfriend} setpresentfriend={setpresentfriend} inputvalue={inputvalue} setinputvalue={setinputvalue}></Content>
      <Myinfo overlay={overlay}></Myinfo>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

    </div>
  )
}
export default Home;