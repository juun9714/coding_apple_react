/*eslint-disable*/
import "./App.css";
import React, { useState } from "react";

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

  let [like, changeLike] = useState(0);
  //useState : array 반환

  let cs = { color: "skyblue", fontSize: "15px" };

  function changeTitle() {
    var newArray = [...글제목];
    // deepcopy : [...originalData]
    /// ...는 기존 object 또는 array의 괄호를 벗겨주세요 라는 뜻임 => 벗긴 후에 다시 []를 씌우면 새로운 array가 됨 !
    // shallowcopy : {...originalData}
    // newArray[0] = "여자 코트 추천";
    newArray.sort()
    글제목변경(newArray);
    //변경함수에는 기존 데이터와 동일한 형식의 데이터로 갈아치워야 함
    //변경함수로 변경해야 재 렌더링이 된다.
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={cs}>{blogTitle}</div>
      </div>

      <button onClick={changeTitle}>글 제목 변경 버튼</button>

      <div className="lists">
        <h4>
          {글제목[0]}
          <span
            onClick={() => {
              changeLike(like + 1);
            }}
          >
            👍
          </span>
          {like}
        </h4>
        <h5>{글내용[0]}</h5>
        <hr></hr>
      </div>

      <div className="lists">
        <h4>{글제목[1]}</h4>
        <h5>{글내용[1]}</h5>
        <hr></hr>
      </div>

      <div className="lists">
        <h4>{글제목[2]}</h4>
        <h5>{글내용[2]}</h5>
        <hr></hr>
      </div>

      <div className="lists">
        <h4>{글제목[3]}</h4>
        <h5>{글내용[3]}</h5>
        <hr></hr>
      </div>
    </div>
  );
}

export default App;
