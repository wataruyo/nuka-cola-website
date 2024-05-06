export default function Sustainability() {
  return (
    <main className="bg-gradient-to-r from-background to-orange-200     py-10 text-text">
      <section className="lg:grid grid-cols-2 flex flex-col">
        <div className="flex justify-center items-center">
          <h1 className="text-5xl font-extrabold p-3">Sustainability</h1>
        </div>
        <div>
          <img src="src\assets\images\nature1.jpg" alt="flower image" />
        </div>
      </section>

      <section className="mx-5 my-10">
        <h2 className="text-4xl font-extrabold text-center py-5">Activities</h2>
        <div className="flex flex-wrap justify-center items-center gap-5">
          <div className="flex flex-col justify-center items-center w-[400px] shadow-lg border border-slate-400 rounded-lg">
            <div className="px-2 py-3">
              <h3 className="text-3xl font-semibold underline">Plating Trees</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatem illo consectetur doloremque iste eligendi similique qui laboriosam quisquam incidunt. Libero dolorem, ab placeat adipisci, distinctio architecto ratione dolor aperiam debitis culpa consectetur ducimus. Voluptatum ipsa facere veniam, tenetur consequatur eligendi consequuntur doloribus fuga nesciunt reprehenderit neque, asperiores ipsam et?</p>
            </div>
            <div>
              <img src="src\assets\images\nature2.jpg" alt="nature" />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center w-[400px] shadow-lg border border-slate-400 rounded-lg">
            <div className="px-2 py-3">
              <h3 className="text-3xl font-semibold underline">Preserving Ocean</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatem illo consectetur doloremque iste eligendi similique qui laboriosam quisquam incidunt. Libero dolorem, ab placeat adipisci, distinctio architecto ratione dolor aperiam debitis culpa consectetur ducimus. Voluptatum ipsa facere veniam, tenetur consequatur eligendi consequuntur doloribus fuga nesciunt reprehenderit neque, asperiores ipsam et?</p>
            </div>
            <div>
              <img src="src\assets\images\sea.jpg" alt="nature" />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center w-[400px] shadow-lg border border-slate-400 rounded-lg">
            <div className="px-2 py-3">
              <h3 className="text-3xl font-semibold underline">Education & Poverty</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatem illo consectetur doloremque iste eligendi similique qui laboriosam quisquam incidunt. Libero dolorem, ab placeat adipisci, distinctio architecto ratione dolor aperiam debitis culpa consectetur ducimus. Voluptatum ipsa facere veniam, tenetur consequatur eligendi consequuntur doloribus fuga nesciunt reprehenderit neque, asperiores ipsam et?</p>
            </div>
            <div>
              <img src="src\assets\images\school2.jpg" alt="nature" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
