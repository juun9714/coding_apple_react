/*eslint-disable*/
import "./App.css";
import React, { useState } from "react";
import { render } from "@testing-library/react";

function App() {
  let [blogTitle, blogTitleF] = useState("개발 Blog");
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "남자 신발 추천",
    "강남 우동 맛집",
    "강남 고기 맛집",
  ]);

  let [choice, changeChoice]=useState(0)

  let [like, changeLike] = useState([0,0,0,0]);
  //useState : array 반환

  let [modal, changeModal] = useState(false)

  let cs = { color: "skyblue", fontSize: "15px" };

  let [input, changeInput]=useState('')


  function changeTitle() {
    var newArray = [...글제목];
    newArray.sort();
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={cs}>{blogTitle}</div>
      </div>
      <button onClick={changeTitle}>글 제목 정렬 버튼</button>

      {
        글제목.map((글, idx) => {
          // a=글제목 안에 있는 하나하나의 데이터
          return (
            <div key={idx} className="lists">
              <h4 onClick={()=>{
                changeChoice(idx)
              }}>{글}<span onClick={()=>{
                var _like=[...like]
                _like[idx]++
                changeLike(_like)
              }}>👍</span>
              {like[idx]}</h4>
              
              <h5>7월 28일 발행</h5>
              <hr></hr>
            </div>
          )
        })
      }


      <div className="publish">
        <input onChange={(e)=>{
          var list=[...글제목]
          changeInput(e.target.value)
        }}></input>
        <button onClick={()=>{
          var _list=[...글제목]
          _list.unshift(input)
          글제목변경(_list)

          var _like=[...like]
          _like.unshift(0)
          changeLike(_like)
        }}>저장</button>
      </div>

      <button onClick={() => {
        if (modal === false) {
          changeModal(true)
        } else {
          changeModal(false)
        }
      }}>버튼</button>

      {
        modal === true ?
          <Modal title={글제목} choice={choice} content={input}></Modal>
          : null
      }

    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.title[props.choice]}</h2>
      <p>날짜</p>
      <p>상세 내용{props.content}</p>
    </div>
  );
}

export default App;
