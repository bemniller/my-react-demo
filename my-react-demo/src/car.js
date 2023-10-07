function Car(props) {
    const brand = props.brand;
    const color = props.color;
    const mileage = props.mileage;
    const myElement = (
      <>
      <h2>Hi, I am a Car!</h2>
      <h3>I am a {color} {brand} </h3>
      <h3>I have driven {mileage} miles!</h3>
      </>
    )
    return myElement
  }
  
  export default Car;