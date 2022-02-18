import './About.css';

function About() {
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}/images/corgi_about.jpeg`} width="300" height="300" alt="corgi-img" />
      <h1>About Corgis</h1>
      <p>Corgis, full name Pembroke Welsh Corgi, are those adorable little dogs with big, furry trunks and tiny, stubby legs.</p>
    </div>
  )
}
export default About;