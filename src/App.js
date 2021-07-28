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
  let [글내용, 글내용변경] = useState([
    "2021 7 27 발행",
    "2021 7 28 발행",
    "2021 7 29 발행",
    "2021 7 30 발행",
  ]);

  let [choice, changeChoice]=useState(0)


  var array = [2, 3, 4]
  var new_array = array.map(function (a) {
    return a * 2
  })
  //기존 배열에 *2를 해주고 그 배열을 반환 => [4,6,8]

  let [like, changeLike] = useState([0,0,0,0]);
  //useState : array 반환

  let [modal, changeModal] = useState(false)

  let cs = { color: "skyblue", fontSize: "15px" };

  function changeTitle() {
    var newArray = [...글제목];
    // deepcopy : [...originalData]
    /// ...는 기존 object 또는 array의 괄호를 벗겨주세요 라는 뜻임 => 벗긴 후에 다시 []를 씌우면 새로운 array가 됨 !
    // shallowcopy : {...originalData}
    // newArray[0] = "여자 코트 추천";
    newArray.sort();
    글제목변경(newArray);
    //변경함수에는 기존 데이터와 동일한 형식의 데이터로 갈아치워야 함
    //변경함수로 변경해야 재 렌더링이 된다.
  }

  function ite(){
    var arr=[]
    for(var i=0;i<3;i++){
      arr.push(<div>hello</div>)
    }

    return arr
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={cs}>{blogTitle}</div>
      </div>
      <button onClick={changeTitle}>글 제목 변경 버튼</button>

      {
        글제목.map((글, idx) => {
          // a=글제목 안에 있는 하나하나의 데이터
          return (
            <div className="lists">
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

      <button onClick={() => {
        if (modal === false) {
          changeModal(true)
        } else {
          changeModal(false)
        }
      }}>버튼</button>

      {
        modal === true ?
          <Modal title={글제목} choice={choice}></Modal>
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
      <p>상세내용</p>
    </div>
  );
}

export default App;
