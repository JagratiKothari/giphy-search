import {useState} from 'react';

const List = (props) => {
  console.log(props);
  const items = props.gifs.map((itemData) => {
    return <Item url={itemData.images} key={itemData.id}/>;
  });
  return <div className="text-container">{items}</div>;
};
const Item = (props) => {
  const [showStillImage, setShowStillImage] = useState(false);
  console.log(props.url);
  const {fixed_width, fixed_width_still} = props.url;
  const {url, width} = showStillImage ? fixed_width_still : fixed_width;

  return (
    <div className="gif-item" onClick={() => setShowStillImage(!showStillImage)}>
       <img src={url} alt={url} width={width}/>
    </div>
  );
};
export default List;