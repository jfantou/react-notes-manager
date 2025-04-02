import { TextCard } from "components/TextCard/TextCard";
import s from "./style.module.css";

export function NoteBrowse(props){
    return <div>
        <TextCard 
          title="test" 
          subtitle="subtitle" 
          content="content" 
          onClickTrash={()=>alert("click trash")}
          onClick={()=>alert("click")}/>
    </div>
}