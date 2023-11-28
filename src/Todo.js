export const Todo = ({item, deleteTask}) => {
    return (
        <div id='items'>
            
        <h1>{item.name}</h1>
        <button id="deletebtn" onClick={() => {
          deleteTask(item.id)
        }
          }>Complete</button>
        </div>
    )
}