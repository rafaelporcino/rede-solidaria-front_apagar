<template>
  <footer class="footer">
    <div class="footer__infos-block">
      <h4 class="footer__title">Bora Ajudar</h4>
      <p class="footer-text">Sobre o projeto</p>
    </div>
    <div class="footer__infos-block">
      <h4 class="footer__title">Social</h4>
      <div class="footer__social-icons">
        <img src="../assets/icone-facebook.png" />
        <img src="../assets/icone-instagram.png" alt="" />
        <img src="../assets/icone-twitter.png" />
      </div>
    </div>
    <div class="footer__infos-block">
      <p class="footer-copyright">© Copyright 2022 - Bora Ajudar</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  width: 100%;
  height: 150px;
  background-color: #ddd;
  justify-content: space-around;
  align-items: center;
  display: flex;
}

.footer__social-icons img {
  margin: 0 5px;
}
.footer__social-icons img:first-child {
  margin-left: 1px;
}

.footer__title,
.footer-text {
  text-align: left;
}

@media screen and (max-width: 768px) {
  .footer {
    flex-direction: column;
    height: auto;
  }

  .footer__title,
  .footer-text {
    text-align: center;
    margin: 0;
  }

  .footer__title {
    margin: 20px 0 10px 0;
  }
}
</style>
