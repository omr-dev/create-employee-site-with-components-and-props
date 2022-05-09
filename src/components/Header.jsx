export function Header(props) {
    const message= props.userIsExternal? "Please meet our team:" : "Summer picnic is May 15!";
  return (
    <p>
     {message}
    </p>
  );
}
