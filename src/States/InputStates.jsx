import React, { useState } from "react";

const InputStates = () => {
  const [form, setForm] = useState({ name: "ali", surname: "huseyn" });
  const [fullname, setFullname] = useState("");

  const onChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const setFullnameString = () => {
    setFullname(form.name + " " + form.surname);
  };
  return (
    <div>
      <h3>name</h3>
      <input name="name" value={form.name} onChange={onChangeForm} />
      <br />
      <br />
      <h3>surname</h3>
      <input name="surname" value={form.surname} onChange={onChangeForm} />
      <br /> <br />
      <button onClick={setFullnameString}>set a full name</button>
      <h3>{fullname}</h3>
    </div>
  );
};

export default InputStates;
