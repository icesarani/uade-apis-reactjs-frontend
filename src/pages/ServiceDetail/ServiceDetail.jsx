import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CheckedStar from "assets/icons/star-filled.svg";
import StarRate from "components/atoms/StarRate";
import PrimaryButton from "components/atoms/PrimaryButton";
import Dropdown from "components/atoms/Dropdown";

const Wrapper = styled.div`
  display: flex;
  max-width: 1400px;
  margin-right: auto;
  margin-left: auto;
  padding: 60px 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const DescripcionContainer = styled.div`
  width: calc((100% / 12) * 8);
  background-color: #f3f4f6;
  float: left;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const DescriptionContent = styled.div`
  padding: 0 20px;
  width: 100%,
  float: left;
`;

const TituloServicio = styled.h3`
  padding: 32px 0;
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
`;

const PerfilTutor = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ProfileImg = styled.img`
  width: 160px;
  height: 160px;
`;

const ProfileDescription = styled.div`
  padding-left: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const NombrePrecioContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NombreTutor = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

const PrecioTutor = styled.label`
  font-size: 24px;
  font-weight: bold;
`;

const TitulosTutor = styled.label`
  font-size: 20px;
`;

const Rate = styled.div`
  margin-top: auto;
  display: flex;
  color: black;
`;

const StarImg = styled.img`
  width: 24x;
  height: 24px;
  margin-right: 3px;
`;

const AcercaDe = styled.div`
  margin-top: 40px;
`;

const AcercaDeTitle = styled.label`
  font-size: 18px;
  font-weight: bold;
`;

const AcercaDeContent = styled.p`
  margin-top: 12px;
`;

const CommentsContainer = styled.div`
  margin-top: 40px;
`;

const CommentsLabel = styled.label`
  font-size: 18px;
  font-weight: bold;
`;

const CommentsHR = styled.hr`
  width: 100%;
  height: 1px;
  color: grey;
  margin: 20px 20px 20px 0;
`;

const Comentario = styled.div`
  margin: 20px 0;
  display: flex;
`;

const UserCommentLogoContainer = styled.div``;

const UserCommentLogo = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  text-transform: uppercase;
`;

const UserComment = styled.div`
  margin-left: 20px;
  width: 100%;
`;

const UserCommentRateAndName = styled.div`
  display: flex;
  align-items: center;
`;

const UserCommentRate = styled.div`
  display: flex;
  align-items: center;
  color: black;
`;

const UserCommentName = styled.label`
  margin-left: 15px;
  font-weight: bold;
`;

const UserCommentText = styled.p`
  margin-top: 8px;
`;

const RealizarNuevoComentarioForm = styled.form``;

const NewCommentNameContainer = styled.div`
  display: flex;
  margin-left: 15px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 10px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NewCommentRateAndName = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NewUserNameInput = styled.input`
  margin-left: 10px;
  width: 100%;
  padding-left: 10px;
  border: 1px solid #ebded5;

  &:hover {
    border: 1px solid #22c55e;
  }

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const NewCommentText = styled.textarea`
  margin-top: 8px;
  height: 100px;
  width: 100%;
  resize: none;
  padding: 10px;
  border: 1px solid #ebded5;

  &:hover {
    border: 1px solid #22c55e;
  }

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const SubmitCommentButtonContainer = styled.div`
  float: right;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const SubmitCommentButton = styled(PrimaryButton)`
  float: right;
`;

const ContratarContainer = styled.form`
  width: calc((100% / 12) * 4);
  background-color: #f3f4f6;
  float: left;
  margin-left: 20px;
  padding: 0 20px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 40px;
    margin-left: 0;
  }
`;

const PedirContratacion = styled.h3`
  font-size: 24px;
  font-weight: bold;
  padding: 32px 0;
  text-align: center;
`;

const MensajeAProveedor = styled.textarea`
  height: 100px;
  width: 100%;
  resize: none;
  padding: 10px;
  border: 1px solid #ebded5;

  &:hover {
    border: 1px solid #22c55e;
  }
`;

const InputSimpleSolicitudAlumnoContainer = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
`;

const LabelSimpleSolicitudAlumno = styled.label`
  width: 100px;
  display: inline-block;
`;

const InputSimpleSolicitudAlumno = styled.input`
  padding-left: 10px;
  border: 1px solid #ebded5;

  &:hover {
    border: 1px solid #22c55e;
  }
`;

const DropdownHorarioContacto = styled(Dropdown)`
  width: 100%;
`;

const SubmitSolicitudButtonContainer = styled.div`
  margin-top: 10px;
`;

const SubmitSolicitudButton = styled(PrimaryButton)``;

const comentariosCursoMatematicas = [
  {
    id: 0,
    name: "María Pérez",
    commentDate: "2023-10-04",
    comment:
      "Este curso ha sido una experiencia increíble. El profesor es muy claro en sus explicaciones, y las lecciones personalizadas hicieron que las matemáticas fueran mucho más comprensibles. ¡Le doy 5 estrellas!",
    rate: 5
  },
  {
    id: 1,
    name: "Juan López",
    commentDate: "2023-10-03",
    comment:
      "Como estudiante universitario, este curso me ayudó a superar mis miedos a las matemáticas. Las prácticas constantes realmente fortalecieron mis habilidades. Lo recomiendo encarecidamente. Puntuación: 4",
    rate: 4
  },
  {
    id: 2,
    name: "Ana Gómez",
    commentDate: "2023-10-02",
    comment:
      "El profesor es muy paciente y se toma el tiempo para explicar cada concepto. Me siento mucho más segura con las matemáticas ahora. Le doy un sólido 5. ¡Gracias!",
    rate: 5
  },
  {
    id: 3,
    name: "Carlos Rodríguez",
    commentDate: "2023-10-01",
    comment:
      "El material del curso es excelente y está bien estructurado. Sin embargo, me hubiera gustado más interacción en vivo. Le doy un 4.",
    rate: 4
  },
  {
    id: 4,
    name: "Laura Martínez",
    commentDate: "2023-09-30",
    comment:
      "Este curso ha sido un salvavidas para mí. Las matemáticas siempre fueron mi debilidad, pero ahora me siento mucho más confiada. Le doy 5 estrellas sin dudarlo.",
    rate: 5
  }
];

const opcionesHorarioContacto = [
  {
    label: "Mañana",
    value: "MANANA"
  },
  {
    label: "Tarde",
    value: "TARDE"
  },
  {
    label: "Noche",
    value: "NOCHE"
  }
];

const detallesServicios = [
  {
    id: 0,
    profilePhoto:
      "data:image/jpeg;base64,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",
    titulo: "Matemáticas",
    tutor: "María",
    establecimiento:
      "Facultad de Ciencias Exactas, Universidad Nacional de Buenos Aires",
    precio: "30",
    sobre_el_servicio:
      "Aprende matemáticas de forma efectiva con nuestras clases personalizadas. Nuestro enfoque se basa en comprender los conceptos clave y resolver problemas prácticos. Ofrecemos ejercicios prácticos, tutoriales en video y sesiones interactivas para mejorar tus habilidades. ¡Desarrolla tu confianza en las matemáticas con nosotros!",
    sobre_mi:
      "Soy María, el tutor de este curso. Tengo una amplia experiencia en la enseñanza de matemáticas y estoy comprometida en ayudarte a alcanzar tus metas académicas. Mi pasión por las matemáticas me lleva a explicar los conceptos de una manera clara y accesible para todos los estudiantes.",
    frequency: "SEMANAL",
    classType: "INDIVIDUAL",
    rate: "2.8"
  },
  {
    id: 1,
    profilePhoto:
      "https://previews.123rf.com/images/jackf/jackf1710/jackf171000538/87285428-oficinista-joven-est%C3%A1-trabajando-en-una-computadora-en-la-sala-de-estar.jpg",
    titulo: "Inglés",
    tutor: "Juan",
    establecimiento: "Facultad de Lenguas, Universidad Nacional de Córdoba",
    precio: "25",
    sobre_el_servicio:
      "Mejora tus habilidades en inglés con nuestras clases personalizadas. Nuestro enfoque se centra en la conversación, la gramática y la comprensión auditiva. Ofrecemos material auténtico y situaciones de la vida real para que te sientas cómodo hablando en inglés en cualquier situación. ¡Aprende de manera divertida y efectiva!",
    sobre_mi:
      "Soy Juan, el tutor de este curso. Mi amor por los idiomas y mi experiencia en la enseñanza me han llevado a ayudar a numerosos estudiantes a alcanzar fluidez en inglés. Estoy comprometido en hacer que tu aprendizaje sea interesante y práctico.",
    frequency: "MENSUAL",
    classType: "INDIVIDUAL",
    rate: "4.2"
  },
  {
    id: 2,
    profilePhoto:
      "data:image/jpeg;base64,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",
    titulo: "Programación",
    tutor: "Laura",
    establecimiento:
      "Facultad de Ciencias Exactas y Naturales, Universidad de Buenos Aires",
    precio: "40",
    sobre_el_servicio:
      "Aprende a programar desde cero o mejora tus habilidades existentes en programación. Nuestro curso abarca los conceptos fundamentales de la programación y te lleva a través de proyectos prácticos. Te sumergirás en el mundo de la codificación y adquirirás las habilidades necesarias para crear tus propias aplicaciones.",
    sobre_mi:
      "Soy Laura, la tutora de este curso. Con una sólida formación en informática y años de experiencia en desarrollo de software, estoy aquí para guiarte en tu viaje de aprendizaje de programación. Mi objetivo es que te sientas confiado en tu capacidad para programar y resolver problemas.",
    frequency: "SEMANAL",
    classType: "GRUPAL",
    rate: "3.9"
  },
  {
    id: 3,
    profilePhoto:
      "data:image/jpeg;base64,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",
    titulo: "Historia",
    tutor: "Carlos",
    establecimiento:
      "Facultad de Filosofía y Letras, Universidad Nacional de Buenos Aires",
    precio: "35",
    sobre_el_servicio:
      "Explora el pasado a través de fascinantes clases de historia. Nuestro curso te llevará a través de diferentes períodos históricos y eventos significativos. Aprenderás a analizar fuentes históricas y a comprender mejor el mundo que te rodea.",
    sobre_mi:
      "Soy Carlos, el tutor de este curso. Mi pasión por la historia me motiva a compartir conocimientos y desafiar la percepción convencional de los eventos pasados. Juntos, exploraremos los secretos de la historia.",
    frequency: "SEMANAL",
    classType: "INDIVIDUAL",
    rate: "4.5"
  },
  {
    id: 4,
    profilePhoto:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHsAuAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAFBgIDBAEHAAj/xAA8EAACAQMDAQYDBAkEAgMAAAABAgMABBEFEiExBhNBUWFxIjKBFJGhsQcjMzRCUnLB8BUkYtHh8VOCsv/EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAIREAAgICAgIDAQAAAAAAAAAAAAECEQMhEkExUQQTImH/2gAMAwEAAhEDEQA/AGGcd1OFDAjPlRyPi7g9qV7iaRr9VYvjPj400x7ftUHPhVmRLVBiVartfmq7Vv2q1Ra/NUlB1P2YqL12M/qxUWNIZlm8aUdWDtdODJx5GmydvAUla+2buRQcDjx5poTG+0x9ij/pFa7D+L2rBYHNnH/TRCxHWpx9muXo1Hgc1QZZDkpjjzr69ZkjDDqTiqIJlK7d2T4im3uiVHVmq3uCsi7jRQ80rX1zsbCkbs8CmOzz9liLdSopiJmhHaDtHp2h2bm8m+N1O2NRlm+laNf1JNI0i7v5ORBGWx5nwpN0Ps5byxnWtbiW51K7HeEy/EIweQoHQYqZSouMbNNt+kTTpoS620+1R8Q3LuH0JovD2l03WdMmis5D3q7d0UiFWXJ6+vuM0rdotEsJ4GaOFYZAp2lOK8u0a/urLWRCjtHLGxCkeB8j6VMZ2VLHSPfj849KJJ8tA9KvP9Qsba6KbHkXLrnO09CM/SjqjitUYEZPlqx/3Sq5OlWSfuooAxV9Xa+oAwtots7bjAxb2rT/AKeTIsiwt8A44pgaRE+ZgKkDnkdKLHxFHV0kSRO8Urnzqq0+aiXa04W3x60JsSc0hBvu5nUd2uR51WYLkH5TRbTv3Va0YosdCnPaagXzHGMeVC7nQLydy7xLuPrT4wFV4FFhQv2tpNb2qiQY2jmtdl1Nbrz93f2rBY8E0RVBJtktTVXs33kgAZJHhQDASEdzIzbh8+c00MAwKkZB4pdutP8As822Fge8kwBngZqZQcno1x5FFUwYszNcxxRRsxDgysfCvQYgBEm3ptHNALewSGPAHxMcsx8a121yLQiNnLR9ParWNpGc8qlIG9v4mutMtLRclZ7uIMB4gHJB+gNAr7tBexaylglpIkBO0SGHKnnHXP8AanPVYUuYreU4KwyCRSPYj+9L0d6tzqUjxwK0UIIaTAyWHgK58j2dGJfkX+0mupYSyWzxh3j5ckkBR59DXnOrzW51yKayA/3OGEgIKk9OD9KfJriGbXZ2uVGyRj18D4c0udsbAAwXVrEoMMwOxV6gkA1EZJOjWcW0ejdi5e+7P2jZB69Pem1elJXYKIw6VtCFEaTcinwHT8wadl6CuqLtHFNVJohL0q2X91WqZKsnP+2WmSZK7XK7QAL7aXV7FfWMVqr7ZHxlfMkDn76N61c3VlpivbRd7KCFIz5+NWXEEc0itKoYoQV9CKvuVEkSq3QnJxU0KtsS5L291CFHu4DEqEomc5bHU1q02J5ZNsYyRzWzXcAQoAMDpWfTZO6uEfoM4NCQDPYArbKrDBFaM1VGcnrx613cMZFBZxqhXzMPOq2dR/EKYiF4f9u/tWGxGd1aLuVTEwz1rLatsViSKa2JmmSUIduetK3aaSbdpkUDMrzXqfKedoySfwo40pkm2Ae1BNTZpO1GnW8alhFGZG9OetapURexlwxUe3ND791hQ88miLyKqEscKOppb1G5E0zSniMcAedCEFdIuDM72rt8Dpx/xNYH0u3sppZ0gje65HQEEE5/Oq9OurW3geeWZVkLFAH6dAcVl1LUC8bQTSrEJziOQHBhfyJ8v88a5M0lyOz48ZcRX1azae+VuYUD5KRDYD746+1a7U2s19Hb3CoVyCVIyMjoP7/dWSWaeCJku3E0zchwpUKvgR6nzrVo1o/dG5lXDyfJnqB/n9qzxR5zo2zy4wHm3UCX4QFXCgKvTA8qLqeKWNDeTmLaWWM8sT0PlRtbwd8I3Xap6NmuvjWjg5WaZasn4t1FVS1bdfsEpDMldrlfUAb1YHLVzvN5A8qqsZ4rqBZIHDKR4GrlXDUUMGatbPcOoTwqqysCrHvelF3QE81xY1PhRQmXW/CAeIoffRy27MYS5VjuwGxiiEEKR5K5yfM1G8iEoBOeAelCH0L4nnDbri5WOJR/N1NTe6yVdW7yM/xIc1pubC2ni2SRGRG6iq4rS2s49kcMyoOirjFQ4vo0U4tbRWzSOm+GMkVVsvZu8ESBQBxu45ojA+R0KDwD9atYBjgYb2Nbxlo55R3oBafpt/Bem5upwyMCBGCcCtVnZd1fXF3PzNIQox/Cg6D86JSIdpwrdPChF7qMo2xwRuZzwAVx9TVXYqor1e9UHulbCjhsUp3+pCWXuIGzj5mHQe1bNaglhjHeSESscsRWAR2sKF3cIcfU1SQrCsUP2nRpomG7DA5+lYLOzeVBaKO9dmwobkAef0olpBU6HPOqtiRyELdSAMZ/OtvZa13ie5/jP6pD6dSa4px5ZTuhPjhAt1YWpuB3jsY4CElJyckAfgaJyS2sFq8sUiSSBf1cS9SfDipahtjkuI9m10uCoHiwwuD91aNKsEEffSgE559a6MUVFNnNmm5NG7SrAWulxJKxLt8Uh8WY81K6SKKFyE5I4ohsLJGowB1JNCdcuY4wkKfE55wtV5ZmXWd80ttGGGXU4JotdnMKGlXTJMPsY8tkj3FHH1COWNEwQw4xWbVMtPRZmvqpEq56j76+pDBWlW8+mvmBiUPVSeKZ7S7hudwRxvX5lzyKHLtUZPAoToEfe6nf3Zzg4jHPXxoAbiVPiKjuQfxCgd/I6kbWI9jWETSFv2jH60BY1C7hVtrNj/ljg1KS4hIx3gpat0/WiVXbdjDLnhh7VqliilO24iRtp6MM4peB2Ef1CMWin2HyHIqE88MgAkuU+iivP+3sFxo2nPq2l2aXEMf7eFmI7tf5wfLzH1rzc9vbw/Jptrj1cmqJo/QDSWCnLXK588iofbtOQ8XiZ8twr8/jtzeGRd1rahdw3YBzjxpz1qe4sNJm1Gx7p2ijSdQ65BT+KmKj0S57RaNCxjuNWgjb+VplBrM/bHs2ihZNXtGx/NMDX531jVJdYvvtl3HEJNgT4VwMD/3Q90XqoA9qRSij33VNe7GXvMmswxP/ADJN/ag9hLpl3JthuUmy+1GJ5bnArxgsQhQqOfSmz9GWmC/7W2rEMIrRTcvjplcBfxIP0p/Y4qw+u2e06iiWunpbx/CqrgCt2gAQ2EAAwzxlvxNCtZlBwh6Vq024iWyiVDhkA3jGOSOv4Vlh/UmzbNqKRy/VZr+NtvxtgH6f+6INthtwpHzHFY4Gj/1GOItlmVyuT5EZ/MVuv1AiCk9Oa6H6OQnNKBGGkOEUD4PM+tAGQzSPKZV3t4YNGpIftM+GyY0GR6k1n1ArbWzGIbWPGaEAEWZYbmNwdwRhn186PyQxyhZE5BAINKZY7MZHJwvvTTp+Tp1v6RgVMkXEg1oucgt99fVqxXKgZsl0+R4WQOoJ4zzxUNN0trO27oyKzFizNjqSaIbq6DStlUYZ9NaY5Mqj6VCSzgiJKoD6ECiW7islxRYUZ4YhPJsjRYwvOVrBa2OoQ3t077GtJCXjAb4lOeeK32sndu/gW4z5VuaKGUHcpwwHHTpU2vA6BpCyIUcBlYYIIyCDSpF+jPseM77C5ZiSdi3MgX6AHinO6gWI70B2nqB4VTHKVYMrYYU4gLyfoz7HvgNo0pAGPiuZgP8A90eTszoyWgtPsKG3EZi2M7MNhGMHJrt1qWo9zKdP0syyJwomuFRWOfPk4q3SbnUJLZn1mG0tpt3wxwTFwB6kgc09g6F3Vv0Z9ltRte5g05LCUA7Z7X4WB9R0P1pLj/RTZJOUl1C4lXOBwqE/TrXsMlxEise9AwCcjmlOed7e0lnkZWZs4VU25J8fM1E5uJrjxqYmy/o10OUSQ21zdRzJ1YPvwfrxRnsb2Sg7L/a5Eu3uZbgKCxUAKozxx/nSruzs0UmqvDfHCXXCsDgbvAH0PI+6mPUYUsz3cabVCZwKh5OWNspY3HJQD1STLHyFZrS/JYRscssZ2n0G3+xqm8laV8LyWOMVn0/T7iSUTj9laR7ZW/myMf8AmtfivTZHytUht020MusR3DfLDbnaPMu3/SD763XDb95Pyg4HrVFi5TkH5ogPqCf+6hHMks8cJPw7sn1xW/ZyhgKsUfJxnkil7WZ3kDdFQdF86L3ryxoWIDL6daWtTn74YUjPgN3WmkKwPdfGYwDhhk+3gKa9CuTPYKjDEkXwsPxzSc7H7Vg8fCPpTBok5EbjPOB9f8zSktDTGCvqGm9kU9QR7V9WdF2NHHjmvlOOpzXCa5k4PPtWZoWHgcDNVSQmTowB8iKxyC9Bw9zt8hDEOn1zVSgSEhrmaVh1XvNpH0GDVqF9kOVdGlbWSNi/fAA9eMVYsqZx9oRvY1VGlrnLRRk+bjJ+81rWRccEY9KOCQc2ZL3Ura0j3XW8IR4xNg/hQeS4WfMtjNHMByQrc48iOoo9LMgk7nDM5XJVR4etC7/R7GUNKbFkcDO6EhG/A1ajEluQNvANUtG+zu6XMWfhDEZ9CKVpJJo2McqyI38StkZ9/wDMUxDTby4bvbKe6hljAKm8iUkg8jlW5HvXdSjkVIxqGmmbvm2t3ILYfwKnIIycceeOtNpdCT9gmy126tGAkJmiP8D4zj0P+Co6awudRnZtVBilA7u1l4IPoen/AHU10e6mkAXRXaPa27fMwYNxtOPh9cnwrUnZ6Z3Jk0eMocHDSbT08958fTpWE1F+TohJx8GG8sGabCZVgecCisdzctGILmcyADGW648s9akuiain7G0to8eDXTnw/prK+j9og5PcWUiekrA/lXM8b6OqOWL8kxp9t3u8lzxgjdwaKxXCQwdxHDEkWMbR09aFpp2tD5rAf/WdT+eK2R6RqDpl1iQ/ymXn8BRH7VpCmsTdszIiQujC4kJQ5X28vauG6EMwli+ZemTVd1pmrREn7GzqPGNw34daD3klzbxu81tcoqfMXhcY/Chzyp9hHHifoPzdqbLBS83wE8sGBI+hoG2pxXLyTWlz3qo2CQCAR7f550s3eqR3CtiQEY6Dwq3Q9PmV5JmbC3IUKufAZ5+ua68OWcntHLnwwirTCrzGW4aVOMkYB60b0qZUkIyBuHw58aGG0EKd5N9AK7byOoBBwAenl7VuzmDbyfF1rtYhMGbr1r6syz0ENzUjVK1Ik1kaEzk8YGPKqpreGcYmjV8dN3Ue1C9Uu54I90T7T57RS5Jq1/ISGupB/Sdv5UUKxrezuovis7skf/HcDePv61W2p3tt++ac5UdZLY7x91L1lqF3HKoW4kIY87ju/OmhNNs5drzQiViM5lYv+Zquck6excI+VoW9b161lcS2mrWdlLjazTzMjYznoOCalbap9stSsWrXUxIxuhtw33EkimKDStOjfvI9PtFkJ5ZYFB/KtXCnCgAelOU30hRj/RYjXVA4kW41OXHw4miRBj2WPP41CfT9du7iORrmQRLIH7pog6nHnll/Km1eV5rvjU8pFUgF/p+oOm19RMHGFRMLj6L/AN0RsLWa0BE1/cXWRjEgXA+4Z+8mtbxo5wyKfcUKvZHgkIidlHlmq5vsFBdBQnj/ALqL5bjcR6jFDUupjbhi/wAXngVBLmYk5kNUqIk6dBAiQ9HB/r/8VwlgMMh4/l5FdiYsgLHJrLqU0kMeYiFPsKdiov7z3z4ZGK5JcbB+tkVR/wAjSXqOq37ZzdSD2OPyololnBeIjXSGYkZ+NiaKsabL9Rk7OSIwvIbSQE5JWMdfPNBnuNKLN/pdpLKU53B9yj8D+dMc2h6XE3fpYW4k8ygP4UShAWJNqhRjoBgVLdFVaPOLmaadt7oFXwUdBXYt2CxXjHWnTWrG17tZe4QOTyQMZpT1glNqJwuegrVO0ZtUzMZe7Yc8dK+qib9mv9Oa+qGUj//Z",
    titulo: "Biología",
    tutor: "Ana",
    establecimiento:
      "Facultad de Ciencias Biológicas, Universidad Nacional de La Plata",
    precio: "30",
    sobre_el_servicio:
      "Descubre el mundo de las ciencias con nuestras clases especializadas en biología. Aprende sobre la diversidad de la vida, la genética y la ecología. Te sumergirás en el fascinante reino natural y comprenderás mejor nuestro entorno.",
    sobre_mi:
      "Soy Ana, la tutora de este curso. Con una formación sólida en biología y una pasión por la naturaleza, estoy aquí para compartir contigo mi conocimiento y ayudarte a apreciar la belleza y la complejidad de la vida en la Tierra.",
    frequency: "MENSUAL",
    classType: "GRUPAL",
    rate: "3.7"
  },
  {
    id: 5,
    profilePhoto:
      "data:image/jpeg;base64,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",
    titulo: "Photoshop",
    tutor: "Luis",
    establecimiento: "Facultad de Artes, Universidad Nacional de Rosario",
    precio: "45",
    sobre_el_servicio:
      "Desarrolla tu creatividad a través de nuestras clases de Photoshop. Aprende las técnicas de edición de imágenes, diseño gráfico y manipulación de fotos. Te convertirás en un experto en la herramienta preferida de los profesionales del diseño.",
    sobre_mi:
      "Soy Luis, el tutor de este curso. Mi pasión por el diseño gráfico y mi experiencia en Photoshop me han permitido trabajar en proyectos emocionantes. Estoy aquí para transmitirte mis conocimientos y ayudarte a desarrollar tus habilidades creativas.",
    frequency: "SEMANAL",
    classType: "INDIVIDUAL",
    rate: "4.8"
  },
  {
    id: 6,
    profilePhoto:
      "data:image/jpeg;base64,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",
    titulo: "Cocina hogareña",
    tutor: "Patricia",
    establecimiento: "Facultad de Gastronomía, Universidad Nacional de Tucumán",
    precio: "35",
    sobre_el_servicio:
      "Comprende los principios económicos con nuestras clases especializadas en cocina hogareña. Aprenderás a planificar comidas, administrar tu presupuesto y cocinar platos deliciosos en casa. ¡Eleva tus habilidades culinarias!",
    sobre_mi:
      "Soy Patricia, la tutora de este curso. Con una amplia experiencia en el mundo de la gastronomía, estoy aquí para compartir contigo mis secretos de cocina y ayudarte a disfrutar de la cocina en casa.",
    frequency: "MENSUAL",
    classType: "GRUPAL",
    rate: "3.2"
  },
  {
    id: 7,
    profilePhoto:
      "data:image/jpeg;base64,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",
    titulo: "Física",
    tutor: "José",
    establecimiento:
      "Facultad de Ciencias Exactas y Naturales, Universidad Nacional de Córdoba",
    precio: "40",
    sobre_el_servicio:
      "Explora las leyes fundamentales del universo con nuestras clases de física. Aprende sobre la mecánica, la electricidad, la termodinámica y la relatividad. Te adentrarás en el fascinante mundo de la física y sus aplicaciones en la vida cotidiana.",
    sobre_mi:
      "Soy José, el tutor de este curso. Mi pasión por la física me lleva a explicar conceptos complejos de manera accesible y emocionante. Estoy aquí para inspirarte y ayudarte a comprender el mundo que nos rodea.",
    frequency: "UNICA",
    classType: "INDIVIDUAL",
    rate: "4.1"
  },
  {
    id: 8,
    profilePhoto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9JGXD5qeDK1y3Cm1CLBR9mkeFpm3UJ6y5Uw&usqp=CAU",
    titulo: "Química",
    tutor: "Carmen",
    establecimiento:
      "Facultad de Ciencias Químicas, Universidad Nacional de San Juan",
    precio: "35",
    sobre_el_servicio:
      "Sumérgete en el mundo de la química con nuestras clases especializadas. Aprende sobre la estructura de la materia, las reacciones químicas y la química orgánica. Descubre cómo la química impacta en nuestra vida diaria.",
    sobre_mi:
      "Soy Carmen, la tutora de este curso. Con una sólida formación en química y una pasión por la ciencia, estoy aquí para compartir contigo los secretos del mundo de la química y ayudarte a comprender sus aplicaciones en el mundo real.",
    frequency: "UNICA",
    classType: "GRUPAL",
    rate: "3.5"
  },
  {
    id: 9,
    profilePhoto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRreEO4bZHUrHFHfDHCr9gh53dbTewgA6ADug&usqp=CAU",
    titulo: "Piano",
    tutor: "Francisco",
    establecimiento:
      "Facultad de Artes Musicales, Universidad Nacional de Córdoba",
    precio: "45",
    sobre_el_servicio:
      "Explora el piano y desarrolla tus habilidades musicales con nuestras clases especializadas. Aprenderás técnicas de piano, teoría musical y podrás tocar tus piezas favoritas. ¡Desarrolla tu pasión por la música!",
    sobre_mi:
      "Soy Francisco, el tutor de este curso. Mi amor por la música y mi experiencia como pianista me han llevado a enseñar a estudiantes de todas las edades. Estoy aquí para inspirarte y ayudarte a alcanzar tus objetivos musicales.",
    frequency: "SEMANAL",
    classType: "INDIVIDUAL",
    rate: "4.3"
  },
  {
    id: 10,
    profilePhoto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShoJrzzvx_QnK5ZBEV31t359qqNzX0v9e-4g&usqp=CAU",
    titulo: "Geografía",
    tutor: "Sandra",
    establecimiento:
      "Facultad de Filosofía y Letras, Universidad Nacional de Buenos Aires",
    precio: "30",
    sobre_el_servicio:
      "Descubre el mundo a través de clases de geografía. Explorarás paisajes, culturas y procesos geográficos. Aprenderás a analizar mapas, entender la geopolítica y apreciar la diversidad del planeta.",
    sobre_mi:
      "Soy Sandra, la tutora de este curso. Mi pasión por la geografía me motiva a compartir conocimientos sobre nuestro mundo. Juntos, exploraremos las maravillas de la Tierra y comprenderemos su importancia en la sociedad actual.",
    frequency: "SEMANAL",
    classType: "INDIVIDUAL",
    rate: "3.9"
  },
  {
    id: 11,
    profilePhoto:
      "https://i.pinimg.com/736x/03/34/52/033452bf18a08d68e7fcf116e2b9b56f.jpg",
    titulo: "Pescados y Mariscos",
    tutor: "Manuel",
    establecimiento:
      "Facultad de Gastronomía, Universidad Nacional de Mar del Plata",
    precio: "35",
    sobre_el_servicio:
      "Aprende sobre la vida y la naturaleza con clases de biología marina enfocadas en pescados y mariscos. Descubrirás la diversidad de especies, métodos de pesca sostenible y técnicas de preparación culinaria.",
    sobre_mi:
      "Soy Manuel, el tutor de este curso. Mi pasión por el mundo marino y la gastronomía se unen en estas clases. Estoy aquí para compartir contigo mi conocimiento y aprecio por los productos del mar.",
    frequency: "MENSUAL",
    classType: "GRUPAL",
    rate: "4.7"
  }
];

const ServiceDetail = () => {
  const [comments, setComments] = useState(comentariosCursoMatematicas);
  const [serviceDetail, setServiceDetail] = useState({});
  const [nuevoComentario, setNuevoComentario] = useState({
    name: "",
    commentDate: "",
    comment: "",
    rate: 0
  });
  const [isSubmitNuevoComentarioDisabled, setIsSubmitNuevoComentarioDisabled] =
    useState(false);

  const [solicitudContratacion, setNewsolicitudContratacion] = useState({
    name: "",
    phoneNumber: "",
    comment: "",
    contactHours: "",
    email: ""
  });
  const [isSubmitSolicitudDisabled, setIsSubmitSolicitudDisabled] =
    useState(false);

  useEffect(() => {
    const { name, comment, rate } = nuevoComentario;

    const disableSubmitNuevoComentario =
      name.length === 0 || comment.length === 0 || rate === 0;

    setIsSubmitNuevoComentarioDisabled(disableSubmitNuevoComentario);
  }, [nuevoComentario]);

  // Get the service id param from the URL.
  const { id: serviceId } = useParams();

  useEffect(() => {
    const { name, phoneNumber, comment, contactHours, email } =
      solicitudContratacion;

    const disableSolicitarContratacion =
      name.length === 0 ||
      phoneNumber.length === 0 ||
      comment.length === 0 ||
      email.length === 0 ||
      contactHours.length === 0;

    setIsSubmitSolicitudDisabled(disableSolicitarContratacion);
  }, [solicitudContratacion]);

  const fetchServices = async () => {
    // const response = await fetch("servicesdetails.json");
    // const { servicesdetail } = await response.json();

    setServiceDetail(
      detallesServicios.find((s) => s.id.toString() === serviceId)
    );
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const getCommentInitials = (nombreCompleto) => {
    const arrNombreCompleto = nombreCompleto.trim().split(" ");

    if (arrNombreCompleto.length === 0) {
      return "";
    }

    if (arrNombreCompleto.length === 1) {
      return arrNombreCompleto[0][0];
    }

    return `${arrNombreCompleto[0][0]}${
      arrNombreCompleto[arrNombreCompleto.length - 1][0]
    }`;
  };

  const handleMakeNewComment = (e) => {
    e.preventDefault();

    // Llamar a la api de publiacion de nuevo comentario para el id de servicio
    console.log(
      "Nuevo comentario enviado y en espera de revision!",
      nuevoComentario
    );

    setNuevoComentario({
      name: "",
      commentDate: Date.now(),
      comment: "",
      rate: 0
    });
  };

  const handleMakeNewSolicitud = (e) => {
    e.preventDefault();

    // Llamar a la api de solicitud de nueva contratacion
    console.log(
      "Nuevo solicitud enviada y en espera de aceptación!",
      nuevoComentario
    );

    setNewsolicitudContratacion({
      name: "",
      phoneNumber: "",
      comment: "",
      contactHours: ""
    });
  };

  console.log(serviceDetail);

  return (
    <Wrapper>
      <DescripcionContainer>
        <DescriptionContent>
          <TituloServicio>{serviceDetail.titulo}</TituloServicio>
          <PerfilTutor>
            <ProfileImg
              src={serviceDetail.profilePhoto}
              alt="foto de perfil del profesor"
            />
            <ProfileDescription>
              <NombrePrecioContainer>
                <NombreTutor>{serviceDetail.tutor}</NombreTutor>
                <PrecioTutor>${serviceDetail.precio}</PrecioTutor>
              </NombrePrecioContainer>
              <TitulosTutor>{serviceDetail.establecimiento}</TitulosTutor>
              <Rate>
                <StarImg src={CheckedStar} />
                {serviceDetail.rate}
              </Rate>
            </ProfileDescription>
          </PerfilTutor>
          <AcercaDe>
            <AcercaDeTitle>Sobre el servicio</AcercaDeTitle>
            <AcercaDeContent>{serviceDetail.sobre_el_servicio}</AcercaDeContent>
          </AcercaDe>
          <AcercaDe>
            <AcercaDeTitle>Sobre mí</AcercaDeTitle>
            <AcercaDeContent>{serviceDetail.sobre_mi}</AcercaDeContent>
          </AcercaDe>
          <CommentsContainer>
            <CommentsLabel>Comentarios de clientes pasados</CommentsLabel>
            <CommentsHR />
            {comments.map((comentario) => {
              const {
                id,
                name,
                comment: commentText,
                rate: commentRate
              } = comentario;
              return (
                <Comentario key={id}>
                  <UserCommentLogoContainer>
                    <UserCommentLogo>
                      {getCommentInitials(name)}
                    </UserCommentLogo>
                  </UserCommentLogoContainer>
                  <UserComment>
                    <UserCommentRateAndName>
                      <UserCommentRate>
                        <StarImg src={CheckedStar} />
                        {parseFloat(commentRate).toFixed(2)}
                      </UserCommentRate>
                      <UserCommentName>{name}</UserCommentName>
                    </UserCommentRateAndName>
                    <UserCommentText>{commentText}</UserCommentText>
                  </UserComment>
                </Comentario>
              );
            })}
            <CommentsHR />
            <RealizarNuevoComentarioForm onSubmit={handleMakeNewComment}>
              <CommentsLabel>Realizar comentario</CommentsLabel>
              <Comentario>
                <UserCommentLogoContainer>
                  <UserCommentLogo>
                    {getCommentInitials(nuevoComentario.name)}
                  </UserCommentLogo>
                </UserCommentLogoContainer>
                <UserComment>
                  <NewCommentRateAndName>
                    <UserCommentRate>
                      <StarRate
                        onChangeHandler={(newRate) =>
                          setNuevoComentario((prevCommentState) => ({
                            ...prevCommentState,
                            rate: newRate
                          }))
                        }
                      />
                    </UserCommentRate>
                    <NewCommentNameContainer>
                      <label htmlFor="nombre-usuario-comentario">Nombre</label>
                      <NewUserNameInput
                        id="nombre-usuario-comentario"
                        placeholder="Nombre"
                        value={nuevoComentario.name}
                        onChange={(e) =>
                          setNuevoComentario((prevCommentState) => ({
                            ...prevCommentState,
                            name: e.target.value
                          }))
                        }
                      />
                    </NewCommentNameContainer>
                  </NewCommentRateAndName>
                  <NewCommentText
                    maxLength="280"
                    placeholder="Comenta que te pareció el curso!"
                    value={nuevoComentario.comment}
                    onChange={(e) =>
                      setNuevoComentario((prevCommentState) => ({
                        ...prevCommentState,
                        comment: e.target.value
                      }))
                    }
                  />
                  <SubmitCommentButtonContainer>
                    <SubmitCommentButton
                      isDisabled={isSubmitNuevoComentarioDisabled}
                    >
                      Comentar
                    </SubmitCommentButton>
                  </SubmitCommentButtonContainer>
                </UserComment>
              </Comentario>
            </RealizarNuevoComentarioForm>
          </CommentsContainer>
        </DescriptionContent>
      </DescripcionContainer>

      <ContratarContainer onSubmit={handleMakeNewSolicitud}>
        <PedirContratacion>Solicitar contratación</PedirContratacion>
        <MensajeAProveedor
          maxLength="280"
          placeholder={`Escribe un mensaje para ${"María"}`}
          value={solicitudContratacion.comment}
          onChange={(e) =>
            setNewsolicitudContratacion((prevSolicitudContratacion) => ({
              ...prevSolicitudContratacion,
              comment: e.target.value
            }))
          }
        />
        <InputSimpleSolicitudAlumnoContainer>
          <LabelSimpleSolicitudAlumno htmlFor="nombre-alumno-solicitud">
            Nombre
          </LabelSimpleSolicitudAlumno>
          <InputSimpleSolicitudAlumno
            id="nombre-alumno-solicitud"
            placeholder="Nombre"
            value={solicitudContratacion.name}
            onChange={(e) =>
              setNewsolicitudContratacion((prevSolicitudContratacion) => ({
                ...prevSolicitudContratacion,
                name: e.target.value
              }))
            }
          />
        </InputSimpleSolicitudAlumnoContainer>
        <InputSimpleSolicitudAlumnoContainer>
          <LabelSimpleSolicitudAlumno htmlFor="telefono-alumno-solicitud">
            Tel:
          </LabelSimpleSolicitudAlumno>
          <InputSimpleSolicitudAlumno
            required
            id="telefono-alumno-solicitud"
            placeholder="Número de teléfono"
            type=""
            value={solicitudContratacion.phoneNumber}
            onChange={(e) =>
              setNewsolicitudContratacion((prevSolicitudContratacion) => ({
                ...prevSolicitudContratacion,
                phoneNumber: e.target.value
              }))
            }
          />
        </InputSimpleSolicitudAlumnoContainer>
        <InputSimpleSolicitudAlumnoContainer>
          <LabelSimpleSolicitudAlumno htmlFor="email-alumno-solicitud">
            Email
          </LabelSimpleSolicitudAlumno>
          <InputSimpleSolicitudAlumno
            id="email-alumno-solicitud"
            placeholder="Email"
            value={solicitudContratacion.email}
            onChange={(e) =>
              setNewsolicitudContratacion((prevSolicitudContratacion) => ({
                ...prevSolicitudContratacion,
                email: e.target.value
              }))
            }
          />
        </InputSimpleSolicitudAlumnoContainer>
        <InputSimpleSolicitudAlumnoContainer>
          <LabelSimpleSolicitudAlumno htmlFor="horario-contacto-alumno-solicitud">
            Horario de Contacto
          </LabelSimpleSolicitudAlumno>
          <DropdownHorarioContacto
            id="dropdown-horario-contacto"
            options={opcionesHorarioContacto}
            placeholderLabel="Categoría"
            onChangeHandler={(e) =>
              setNewsolicitudContratacion((prevSolicitudContratacion) => ({
                ...prevSolicitudContratacion,
                contactHours: e.target.value
              }))
            }
          />
        </InputSimpleSolicitudAlumnoContainer>
        <SubmitSolicitudButtonContainer>
          <SubmitSolicitudButton
            type="submit"
            isDisabled={isSubmitSolicitudDisabled}
          >
            Solicitar
          </SubmitSolicitudButton>
        </SubmitSolicitudButtonContainer>
      </ContratarContainer>
    </Wrapper>
  );
};

export default ServiceDetail;
