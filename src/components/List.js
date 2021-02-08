import styled from 'styled-components';

function List(props) {

    const List = styled.li`
        display: flex;
        justify-content: space-between;
        margin: 10px;
        width: 160px;
        height: 20px;
        padding: 10px;
        border-bottom: 1px solid white;

        p{
            margin: 0px;
            font-family: sans-serif;
        }
    `;

    


    return (
        <div>
            {props.numberList.map((numb) => {
                 return <List> <p>{numb.item}</p> </List>
            })}
        </div>
    )
}

export default List
