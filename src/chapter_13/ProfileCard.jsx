import Card from "./Card";

function ProfileCard(props) {
  return (
    <Card title="J Kim" backgroungColor="#4ea04e">
      <p>안녕하세요, 소플입니다.</p>
      <p>저는 리액트를 사용해서 개발하고 있습니다.</p>
    </Card>
  );
}

export default ProfileCard;