<template>
  <section id="about" class="about section">
    <h1 class="section__title">About</h1>
    <p class="section__subtitle">My Introduction</p>
    <div class="row">
      <div class="col-md-6">
        <div class="img">
        <img class="about_img" src="/d.jpeg" alt=""/>
        </div>
      </div>
      <div class="col-md-6">
        <div class="content">
          <p>
            A Product owner  with {{experience}} years of experience in managing teams software development. Recognized for
            demonstrating strong analytical skills and proven software 
            development skills. Expert in  <br> <code> Scrum and Agile Methodology <br> </code> <code> Complete Product Lifecycle<br></code> <code> Design and UX Principles <br></code>and <br>
            <code>HTML and CSS</code>. <br>
            I have multiple years of experience in a wide range of disciplines including entrepreneurship, engineering, data analytics, internet marketing, conversion optimization, and UX. 
            These experiences have given me unique insights into the product lifecycle and has allowed me to think through the entire customer journey while challenging our own assumptions.
             Effective and articulate communicator with all levels of employees.
          </p>
          <div class="stats">
            <div class="stat">
              <h3>{{experience}}+</h3>
              <p>Years Experience</p>
            </div>
            <div class="stat">
              <h3>08+</h3>
              <p>Completed Projects</p>
            </div>
            <div class="stat">
              <h3>{{compCount}}+</h3>
              <p>Companies Worked</p>
            </div>
          </div>
          <a href="pdf/resume.pdf" target="_blank" class="btn btn_primary mt-5">
            Download CV <i class="uil uil-import mx-2"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';
import data from '../config/data';

export default {
  name: 'AboutSection',
  setup() {
    const compCount = data.companies.length
    const experience = ref(Number(new Date().getFullYear()) - 2017)
    return {
      experience,
      compCount
    }
  }
}
</script>