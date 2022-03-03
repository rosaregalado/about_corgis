import './History.css';

function History() {
  return (
    <div className="History">
      <h2 className="Title">History of The Corgi Breeds</h2>
      <p>Corgis are thought to descend from the short-legged Swedish Valhund and the spitz brought by Viking invaders and crossed with a local, but now extinct, type of dog known as the "turn-spit dog." These small dogs were harnessed to a spit that rotated meat over a fire. Cardigan Welsh corgis were named for Cardaginshire in Wales. All corgis were Cardigan Welsh corgis until 1934, when the Kennel Club of the UK decided that Pembrokeshire Welsh corgis were different enough to warrant being their own breed.</p>
      <img src={`${process.env.PUBLIC_URL}/images/corgi_animated.png`} alt="corgi" />
    </div>
  )
}
export default History;