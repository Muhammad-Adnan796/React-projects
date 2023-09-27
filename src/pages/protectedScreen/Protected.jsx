import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fbAuth } from "../../firebaseConfige/FirebaseConfige";

const Protected = ({ Screen }) => {
  const [loader, setLoader] = useState(true);

  const nevigate = useNavigate();

  const checkAuth = () => {
    fbAuth()
      .then((response) => {
        if (response.email === `admin8123796@gmail.com`) {
          nevigate("/admin",{replace: true});
        } else {
            nevigate("/quiz",{replace: true}); 
        }
        setLoader(false);
      })
      .catch((error) => {
        console.log(`Auth Error : ${error}`);
        nevigate('/signin');
          setLoader(false);
      });
  };
  useEffect(() => {
    checkAuth();
  }, []);

  return loader ? <div>Loader...</div> : <Screen />;
};

export default Protected;
