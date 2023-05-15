<script>
	import InfoBox from './InfoBox.svelte';

	const devopsIcons = [
		{
			src: '/devops/kubernetes.png',
			alt: 'Kubernetes',
			description:
				'I have a lot of experience in Kubernetes. The backend of this website is running on a Kubernetes cluster hosted by me.'
		},
		{
			src: '/devops/helm.png',
			alt: 'Helm',
			description:
				"Almost all of the deployments I've done use Helm for templating and composition of components."
		},
		{
			src: '/devops/hetzner.png',
			alt: 'Hetzner',
			description:
				'This is my preferred Cloud Provider. Everything I do for personal stuff is hosted on Hetzner. I can only recommend them for personal as well as professional use.'
		},
		{
			src: '/devops/aws.png',
			alt: 'AWS',
			description:
				"Everybody knows this one. I have worked with AWS but it isn't really my favorite thign to work with."
		},
		{
			src: '/devops/terraform.png',
			alt: 'Terraform',
			description:
				'I love Terraform. Makes working with AWS really nice and spinning up Kubernetes clusters on Hetzner is a charm with it.'
		},
		{
			src: '/devops/ansible.png',
			alt: 'Ansible',
			description:
				"Ansible is awesome for stuff you don't really want to do with Terraform. I do have quite a bit experience using Ansible."
		}
	];

	const frontendIcons = [
		{
			src: '/frontend/svelte.png',
			alt: 'Svelte',
			description:
				'I love Svelte. It is my favorite frontend framework. I have used it for a lot of projects and I am using it for this website as well.'
		},
		{
			src: '/frontend/tailwind.png',
			alt: 'Tailwind',
			description:
				"I'm a big fan of Tailwind. I use it for all my projects. It makes styling so much easier and faster."
		},
		{
			src: '/frontend/vue.png',
			alt: 'Vue',
			description:
				'I have used Vue for a lot of projects. I really like it, but I prefer Svelte over it.'
		},
		{
			src: '/frontend/typescript.png',
			alt: 'TypeScript',
			description:
				"I don't write frontend code without TypeScript. It is a must have for me to even touch a project."
		}
	];

	const backendIcons = [
		{
			src: '/backend/quarkus.png',
			alt: 'Quarkus',
			description:
				'Quarkus is my go-to backend framework (Java btw). The ease of use and amount of extensions is unrivaled. The backend for this website is written in Quarkus btw.'
		},
		{
			src: '/backend/graphql.png',
			alt: 'GraphQL',
			description:
				"I'm a fan of GraphQL. Mostly because it basically sets up a contract between frontend and backend. Code generation and typings are a big plus. It does have some shortcomings though (complexity and setup)."
		},
		{
			src: '/backend/postgres.png',
			alt: 'PostgreSQL',
			description:
				"I'm a big fan of PostgreSQL. When it comes to relational DBs it is my first choice."
		},
		{
			src: '/backend/s3.png',
			alt: 'S3',
			description:
				"For storing files and images I use S3. It's cheap and easy to use. If I don't need to have it in the Cloud I go with MinIO, which is a S3 compatible storage."
		},
		{
			src: '/backend/golang.png',
			alt: 'Go',
			description:
				"I have used Go for a bunch of stuff. Most of the time simple little projects or scripts. I don't think I would use it for a big project though."
		},
		{
			src: '/backend/rust.png',
			alt: 'Rust',
			description:
				"I like Rust. I'm still a beginner though. I have done a few experiments with it and I'm looking forward to using it more in the future. Especially for web stuff (Leptos)."
		}
	];
</script>

<InfoBox icons={devopsIcons} text="DevOps" />
<InfoBox icons={frontendIcons} text="Frontend" />
<InfoBox icons={backendIcons} text="Backend" />
