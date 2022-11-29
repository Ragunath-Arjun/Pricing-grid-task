export default function Pricinggrid({ card }) {
  return (
    <div class="col-lg-4 pricing">
      <div class="card mb-5 mb-lg-0 pricing1">
        <div class="card-body">
          <h5 class="card-title text-muted text-uppercase text-center" style={{opacity:"1"}}>
            {card.name}
          </h5>
          <h6 class="card-price text-center" style={{fontSize:"2.6rem",fontWeight:"bold"}}>
            ${card.plan}
            <span class="period" style={{fontSize:"1rem"}}>/month</span>
          </h6>
          <hr/>
          <ul class="fa-ul">
            {card.plandetails.map((item) => {
              return <li class={`${item.tick ? 'text-muted ' : 'a' } ${item.fontwei ? "font-weight-bold" : ""}`}><span><i class={`${item.fonticon ? "fa fa-check" : "fa fa-times"}`}></i></span>
              {item.title}</li>;
            }) }
          </ul>
          <div class="d-grid">
            <a href="#" class="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
