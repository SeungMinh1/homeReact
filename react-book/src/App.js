import {useState} from 'react';
function Header(props){
  console.log('props', props)
  return (       <header>
                    <h1>
                      <a href="/"onClick={function (e) {
                        e.preventDefault();
                        props.onChangeMode();
                      }}>{props.title}</a>
                    </h1>
                  </header>)
}

function Navigation(props){
  const lis = [];
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
   
    lis.push(<li key={t.id}><a id={t.id} href={'/read/'+t.id} onClick={e=>{
      e.preventDefault();
      props.onChangeMode(e.target.id);
    }}>{t.body} </a></li>)
  }
  return (       <nav>
                    <ol>
                      {lis}
                    </ol>
                  </nav>)
}

function Article(props){
  return (      <article>
                  <h2>{props.title}</h2>
                  {props.body}
                </article>)
}

function Create(props){
  return (
    <article>
      <h2>Create</h2>
      <form onSubmit={e=>{
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;
        props.onCreate(title, body)

      }}>
        <p><input type='text' name='title' placeholder='title' /></p>
        <p><textarea name="body" placeholder='body'></textarea></p>
        <p><input type='submit' value='Create'></input></p>
      </form>
    </article>
  )
}


function App() {
  let content = null;
  const [topics, setTopics] = useState([{id:'1', title:'html', body:'html is'},
                  {id:'2', title:'css', body:'css is'},
                  {id:'3', title:'javascript', body:'javascript is'}])
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null)
  const [nextId, setNextid] = useState(4);
  let title, body = null;
  for(let i=0; i<topics.length; i++){
    if(id === topics[i].id){
      title = topics[i].title;
      body = topics[i].body;
    }
  }
  if(mode === "WELCOME"){
    content = <Article title="Welcome" body="Hello, WEB" onChangeMode={function(){}}/>
  }else if(mode === "READ"){
    content = <Article title={title} body={body} onChangeMode={function(){}}/>
  }else if(mode === "CREATE"){
    content = <Create  onCreate={(title, body)=>{
      const newTopic = {id:nextId, title:title, body:body} 
      const newTopics = [...topics]
      newTopics.push(newTopic);
      setTopics(newTopics)
      setMode('READ');
      setId(nextId);
      setNextid(nextId+1);
    }}></Create>
  }
  return (
    <div>
     
      <Header title="REACT" onChangeMode={function(){
        setMode("WELCOME")
      }}/>
      <Navigation topics={topics} onChangeMode={function(id){
        setMode("READ")
        setId(id)
      }} />
      {content}
      <a href='/create' onClick={e=>{
        e.preventDefault();
        setMode('CREATE');
      }}>Create</a>
      
    </div>
  );
}

export default App;