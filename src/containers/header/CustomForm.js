import './header.css';

const url = "https://eleviq.us17.list-manage.com/subscribe/post?u=bce71f9646b44fe898859fbd1&amp;id=103a7871c2&amp;f_id=00b557e0f0";


const CustomForm = ({ status, message, className, style, onSubmitted }) => {
  let input;
  const submit = () =>
    input &&
    input.value.indexOf("@") > -1 &&
    onSubmitted({
      EMAIL: input.value
    });

  return (
    <>
    <div className={className} style={style}>
      <input
        ref={node => (input = node)}
        type="email"
        placeholder="Your email"
      />
      <button onClick={submit}>Submit</button>
    </div>
    <div className = "eleviq__header-content__input-feedback">
      {status === "sending" && <div style={{ color: "blue" }}>Sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
    </div>
    </>
    
  );
};




export default CustomForm;