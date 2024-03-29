<script setup lang="ts">
const devopsIcons = [
  {
    src: '/devops/kubernetes.png',
    alt: 'Kubernetes',
    description:
        'I have a lot of experience in Kubernetes. The backend of this website is running on a Kubernetes cluster hosted by me.',
    link: 'https://kubernetes.io/'
  },
  {
    src: '/devops/helm.png',
    alt: 'Helm',
    description:
        "Almost all of the deployments I've done use Helm for templating and composition of components.",
    link: 'https://helm.sh/'
  },
  {
    src: '/devops/hetzner.png',
    alt: 'Hetzner',
    description: `This is my preferred Cloud Provider. Everything I do for personal stuff is hosted on Hetzner.
    I can only recommend them for personal as well as professional use.`,
    link: 'https://www.hetzner.com/'
  },
  {
    src: '/devops/aws.png',
    alt: 'AWS',
    description:
        "Everybody knows this one. I have worked with AWS but it isn't really my favorite thign to work with.",
    link: 'https://aws.amazon.com/'
  },
  {
    src: '/devops/terraform.png',
    alt: 'Terraform',
    description:
        'I love Terraform. Makes working with AWS really nice and spinning up Kubernetes clusters on Hetzner is a charm with it.',
    link: 'https://www.terraform.io/'
  },
  {
    src: '/devops/ansible.png',
    alt: 'Ansible',
    description:
        "Ansible is awesome for stuff you don't really want to do with Terraform. I do have quite a bit experience using Ansible.",
    link: 'https://www.ansible.com/'
  }
];

const frontendIcons = [
  {
    src: '/frontend/svelte.png',
    alt: 'Svelte',
    description: `I love Svelte. It is my favorite frontend framework.
    I have used it for a lot of projects.`,
    link: 'https://svelte.dev/'
  },
  {
    src: '/frontend/tailwind.png',
    alt: 'Tailwind',
    description:
        "I'm a big fan of Tailwind. I use it for all my projects. It makes styling so much easier and faster.",
    link: 'https://tailwindcss.com/'
  },
  {
    src: '/frontend/vue.png',
    alt: 'Vue',
    description:
        `I have used Vue for a lot of projects. I really like it, but I prefer Svelte over it.
        This website is made with Vue because of the bigger ecosystem compared to Svelte.`,
    link: 'https://vuejs.org/'
  },
  {
    src: '/frontend/typescript.png',
    alt: 'TypeScript',
    description:
        "I don't write frontend code without TypeScript. It is a must have for me to even touch a project.",
    link: 'https://www.typescriptlang.org/'
  },
  {
    src: '/frontend/nuxt.png',
    alt: 'Nuxt',
    description:
        `I have used Nuxt for a few projects. The clear structure, the router and the auto-imports are a big plus.
        Also SSR is a nice feature.`,
    link: 'https://nuxt.com/'
  },
  {
    src: '/frontend/vercel.png',
    alt: 'Vercel',
    description:
        `I have used Vercel for a few projects. It is really easy to use and the free tier is awesome.
        This website is hosted on Vercel btw.`,
    link: 'https://vercel.com/'
  }
];

const backendIcons = [
  {
    src: '/backend/quarkus.png',
    alt: 'Quarkus',
    description:
        `Quarkus is my go-to backend framework (Java btw). The ease of use and amount of extensions is unrivaled.
        The backend for this website is written in Quarkus btw.`,
    link: 'https://quarkus.io/'
  },
  {
    src: '/backend/graphql.png',
    alt: 'GraphQL',
    description:
        `I'm a fan of GraphQL. Mostly because it basically sets up a contract between frontend and backend.
        Code generation and typings are a big plus. It does have some shortcomings though (complexity and setup).`,
    link: 'https://graphql.org/'
  },
  {
    src: '/backend/postgres.png',
    alt: 'PostgreSQL',
    description:
        "I'm a big fan of PostgreSQL. When it comes to relational DBs it is my first choice.",
    link: 'https://www.postgresql.org/'
  },
  {
    src: '/backend/s3.png',
    alt: 'S3',
    description:
        `For storing files and images I use S3. It's cheap and easy to use.
        If I don't need to have it in the Cloud I go with MinIO, which is a S3 compatible storage.`,
    link: 'https://aws.amazon.com/s3/'
  },
  {
    src: '/backend/golang.png',
    alt: 'Go',
    description:
        `I have used Go for a bunch of stuff. Most of the time simple little projects or scripts.
        I don't think I would use it for a big project though.`,
    link: 'https://golang.org/'
  },
  {
    src: '/backend/rust.png',
    alt: 'Rust',
    description:
        `I like Rust. I did the Advent of Code 2023 in Rust and it was a lot of fun.
        I have done a few other experiments with it and I'm looking forward to using it more in the future.
        Especially for web stuff (Leptos).`,
    link: 'https://www.rust-lang.org/'
  }
];

const img = useImage()
const backgroundImg = img('/gradient/subtle-gradient.png',
    {width: 2880, height: 1280})

const selected = ref('devops');
</script>

<template class="flex flex-col justify-center">
  <div>
  <div class="flex flex-row justify-center">
    <h1
      :class="`m-4 lg:m-6 font-bold text-sm lg:text-xl p-2 lg:p-4 border-[1px] hover:bg-white hover:text-black cursor-pointer
      ${selected === 'devops' ? 'bg-white text-black' : ''}
      `"
      @click="selected = 'devops'"
    >DEVOPS</h1>
    <h1
      :class="`m-4 lg:m-6 font-bold text-sm lg:text-xl p-2 lg:p-4 border-[1px] hover:bg-white hover:text-black cursor-pointer
      ${selected === 'frontend' ? 'bg-white text-black' : ''}
      `"
      @click="selected = 'frontend'"
    >FRONTEND</h1>
    <h1
      :class="`m-4 lg:m-6 font-bold text-sm lg:text-xl p-2 lg:p-4 border-[1px] hover:bg-white hover:text-black cursor-pointer
      ${selected === 'backend' ? 'bg-white text-black' : ''}
      `"
      @click="selected = 'backend'"
    >BACKEND</h1>
  </div>
  <div class="fullstack w-screen flex justify-center items-center py-14 h-[66vh]"
  :style="`background-image: url('${backgroundImg}')`">
    <InfoBox v-if="selected === 'devops'" :icons="devopsIcons"/>
    <InfoBox v-if="selected === 'frontend'" :icons="frontendIcons"/>
    <InfoBox v-if="selected === 'backend'" :icons="backendIcons"/>
  </div>
  </div>
</template>

<style scoped>
.fullstack {
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
