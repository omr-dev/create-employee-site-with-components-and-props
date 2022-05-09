export function Footer(props) {
  const message = props.userIsExternal
    ? "© All rights reserved."
    : '"We are standing on the shoulders of giants."';
  return <p>{message}</p>;
}
