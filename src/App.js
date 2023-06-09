import "./App.css";
import React, { Suspense, lazy } from "react";
const Component_1 = lazy(() => import("./components/LazyLoading/Component_1"));
const Component_2 = lazy(() => import("./components/LazyLoading/Component_2"));

// import React, { useContext } from "react";
// import { ReferencCompont } from "./components/ReferencCompont";
// import { Multiple_checkBox } from "./components/Forms_Handling/Multiple_checkBox";
// import { OtherInp_things } from "./components/Forms_Handling/OtherInp_things";
// import { Controlled_function } from "./components/Forms_Handling/Controlled_function";
// import { Milti_InpFlds_Functi } from "./components/Forms_Handling/Milti_InpFlds_Functi";
// import Conditional_UseEffect from "./components/UseEffect_Hook/Conditional_UseEffect";
// import { UCComp_A } from "./components/UseContext/UCComp_A";
// import { createContext, useState } from "react";
// import { State_Class } from "./components/UseState_Hook/State_Class";
// import { State_Function } from "./components/UseState_Hook/State_Function";
// import { Function_UseEffect } from "./components/UseEffect_Hook/Function_UseEffect";
// import { HUSWithObj } from "./components/HUSWithObj";
// import { HUSWithArray } from "./components/HUSWithArray";
// import { HookComponents } from "./components/HUSComponents";
// import { Header } from "./components/HeaderStyleM";
// import { Footer } from "./components/FooterStyleM";
// import PropTypes from "prop-types";
// import SideBar from "./comonents/SideBar";
// import { PropsParentM } from "./components/ParentM";
// import { ConditionalRend } from "./components/ConditionalRend";
// import { ListMethods } from "./components/ListMethods";
// import { StyleMethod } from "./components/StyleMethod";
// import { ExternalStyle } from "./components/ExternalStyle";
// import { StatesCompo } from "./comonents/states";
// import { Destrr_props } from "./comonents/destrr_props";
// import { Mounting1 } from "./comonents/mounting1";
// import { StudentConstruc } from "./comonents/constructor";
// import  {User, User2 } from "./User";
// import App from "./App";

// let faculty = "Bechelor of Science in Computer Science";

// let studentsName = ["Muhammad Adnan","Zeeshan","Yasir"];

// export const NameContext = createContext();
// export const FatherNameContext = createContext();

function App() {
  // let [fname, setName] = useState("Muhammad Adnan");
  return (
    <>
      {/* <StatesCompo />
    <Destrr_props name="Adnan" age="22" />
    <App
      propNaaam="String He Ye"
      propNumb={23}
      isMarried={true}
      stuName={studentsName}
    />
    <User name="Muhammad Adnan" age="22" faculty={faculty} />
    <User2 />
    <StudentConstruc name="adnan" />
    <Mounting1 city="Karachi" />
    <PropsParentM />
    <ConditionalRend /> 
    <ListMethods /> 
    <StyleMethod/> 
    <ExternalStyle check={true} />
      <SideBar /> 
      <h1> App PropString : {props.propNaaam} </h1> <br />
      <h1> App PropNumber : {props.propNumb} </h1> <br />
      <h1> App PropBool : {props.isMarried.toString()} </h1>
      <h1> App PropArray : {props.stuName.join(" ")} </h1>
      <h1> App PropArray : {props.stuName[0]} </h1>
      <Header />
      <Footer />
      <HookComponents/>
      <HUSWithObj/>
      <HUSWithArray/>
      <State_Class/>
      <State_Function/>
      <Function_UseEffect/>
      <Conditional_UseEffect/>
      <NameContext.Provider value={fname}>
        <FatherNameContext.Provider value={"Flutter with Dani"}>
          <UCComp_A />
        </FatherNameContext.Provider>
      </NameContext.Provider>
      <Controlled_function/>
      <Milti_InpFlds_Functi/>
      <OtherInp_things/>
      <Multiple_checkBox/>
      <ReferencCompont />
      */}
      <h1>Lazy Loading...</h1>
      <Suspense fallback={<div>LOADING ...Comp1</div>}> 
        <Component_1 />
      </Suspense>
      <Suspense fallback={<div>LOADING ... Comp2</div>}>
        <Component_2 />
      </Suspense>
    </>
  );
}

// App.propTypes = {
//   propNaaam: PropTypes.string.isRequired,
//   propNumb: PropTypes.number,
//   isMarried: PropTypes.bool,
//   stuName: PropTypes.array,
// };

// App.defaultProps = {
//   propNaaam: "Anonymous",
//   propNumb: 25,
// };

export default App;
