import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CardProyecto from "./CardProyecto";

const Slider = ({ proyectos, mostrarVista }) => {
   return (
      <>
         <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={20}
            effect="fade"
            navigation
         >
            {proyectos.map(proyecto => {

               const { imagen, id, nombre } = proyecto;

               return (
                  <SwiperSlide key={id} className="enlaces">
                     <CardProyecto
                        imagen={imagen}
                        nombre={nombre}
                        id={id}
                        mostrarVista = {mostrarVista}
                     />
                  </SwiperSlide>
               )
            })}

         </Swiper>
      </>
   )
}

export default Slider