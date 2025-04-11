<template>
  <q-page class="flex flex-col" padding>
    <h5>Sobre</h5>
    <div class="p-10 w-full bg-[#EDEEF2] flex flex column flex-center text-center text-xl">
      <h2 class="mb-5">Gabriel Resende</h2>
      <p>
        Desenvolvedor com 3 anos de experiência profissional, atuando no desenvolvimento de
        aplicações web e mobile. Tenho especialização em tecnologias como React, React Native,
        Angular, Vue, Python e PHP.
      </p>
      <p>
        Também possuo experiência na área de Blockchain, desenvolvendo aplicações descentralizadas
        com Solidity, incluindo a criação de contratos inteligentes e uso de ferramentas como
        Hardhat para desenvolvimento, testes e deploy em redes Ethereum e compatíveis.
      </p>
      <p>
        Tenho facilidade de aprendizado, adaptação a novas tecnologias e metodologias de trabalho, o
        que me permite integrar rapidamente em diferentes times e contribuir de forma eficiente em
        projetos de variados contextos.
      </p>
      <br />
      <br />
      <p>
        O objetivo principal deste teste é avaliar a capacidade de consumir e integrar uma API
        pública (neste caso, a Giphy API) em uma aplicação real utilizando o Quasar Framework com
        Vue 3.
      </p>
      <li class="list-none">
        <ul>
          <a
            class="text-blue uppercase"
            target="_blank"
            href="https://www.linkedin.com/in/gabriel-resende-878271239/"
            >Linkedin</a
          >
        </ul>
        <ul>
          <a class="text-black uppercase" target="_blank" href="https://github.com/GabrieldeResende"
            >Github</a
          >
        </ul>
      </li>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutPage',
})
//
</script>
