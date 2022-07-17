import React from "react";

const Acordion = () => {
  return (
    <div className="mb-20">
      <div className="mb-20">
        <h1 className="text-5xl text-center">FAQs</h1>
      </div>
      <div className="container mx-auto">
        <div
          tabindex="0"
          class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div class="collapse-title text-xl font-medium">
            Focus me to see content on question of carrer ?
          </div>
          <div class="collapse-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              quam nisi deleniti fugiat, facere quos possimus, quis laudantium
              ad a itaque ex sequi aliquam consectetur in ullam. Quia, ullam
              quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ratione, fugit labore tempora ullam, similique ut tempore minima
              exercitationem quod nihil accusamus atque, iste tenetur nam nobis
              qui corrupti expedita. Laboriosam facilis omnis laudantium earum
              in deleniti obcaecati nesciunt provident illo!
            </p>
          </div>
        </div>
        <div
          tabindex="0"
          class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-5"
        >
          <div class="collapse-title text-xl font-medium">
            Focus me to see content ?
          </div>
          <div class="collapse-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              quam nisi deleniti fugiat, facere quos possimus, quis laudantium
              ad a itaque ex sequi aliquam consectetur in ullam. Quia, ullam
              quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ratione, fugit labore tempora ullam, similique ut tempore minima
              exercitationem quod nihil accusamus atque, iste tenetur nam nobis
              qui corrupti expedita. Laboriosam facilis omnis laudantium earum
              in deleniti obcaecati nesciunt provident illo!
            </p>
          </div>
        </div>
        <div
          tabindex="0"
          class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div class="collapse-title text-xl font-medium">
            Focus me to see content Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, perferendis.?
          </div>
          <div class="collapse-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              quam nisi deleniti fugiat, facere quos possimus, quis laudantium
              ad a itaque ex sequi aliquam consectetur in ullam. Quia, ullam
              quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ratione, fugit labore tempora ullam, similique ut tempore minima
              exercitationem quod nihil accusamus atque, iste tenetur nam nobis
              qui corrupti expedita. Laboriosam facilis omnis laudantium earum
              in deleniti obcaecati nesciunt provident illo!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acordion;
