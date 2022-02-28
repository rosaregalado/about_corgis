import './About.css';

function About() {
  return (
    <div className="About">
      <img src={`${process.env.PUBLIC_URL}/images/corgi_about2.jpeg`} width="300" height="300" alt="corgi-img" />
      <div className="About-text">
        {/* <h1>About</h1> */}
        <p><strong>Corgis</strong>, full name Pembroke Welsh Corgi, are those adorable little dogs with big, furry trunks and tiny, stubby legs.
          Among the most agreeable of all small housedogs, the Pembroke Welsh Corgi is a strong, athletic, and lively little herder who is affectionate and companionable without being needy. They are one the world's most popular herding breeds. At 10 to 12 inches at the shoulder and 27 to 30 pounds, a well-built male Pembroke presents a big dog in a small package
        </p>
      </div>
    </div>
  )
}
export default About;