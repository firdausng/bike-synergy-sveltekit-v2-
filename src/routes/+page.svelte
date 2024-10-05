<script lang="ts">
    import HomepageHero from './homepage-hero.svelte'
    import CatalogSection from '$lib/products/catalog-section.svelte'
    import ParallaxWrapper from '$lib/ui/parallax-wrapper.svelte'
    import GetInTouchForm from './get-in-touch.svelte'
    import EmphasisText from './emphasis-text.svelte'
    import { PortableText } from '@portabletext/svelte';
    import type {Parallax, TeamMember} from '../app'

    let {data} = $props();
    let qnaList = $state(data.sanityData.mainPage.faq.map((f) => {
        return {
            ...f,
            showAnswer: false,
        }
    }))
</script>


<section id="homepage" class="h-screen">
    <HomepageHero data={data.sanityData.mainPage.hero}/>
</section>

<ParallaxWrapper>
    {@render parallax(data.sanityData.mainPage.parallax1)}
</ParallaxWrapper>

<section id="about-us" class="px-2 animate-in fade-in">
    <div class="container mx-auto py-8 text-center prose max-w-max prose-lg dark:prose-invert prose-headings:text-slate-700 prose-headings:m-2
            prose-p:text-slate-700 prose-p:m-2 prose-strong:text-orange-700 prose-h1:text-[75px] prose-h1:p-4
            prose-li:bg-[url(images/icons/40px/154.png)] prose-li:bg-no-repeat prose-li:pl-12 prose-li:text-justify
            prose-ul:flex prose-ul:flex-col prose-ul:gap-2 prose-ul:justify-items-center prose-ul:list-none prose-ul:max-w-[900px]
            flex flex-col items-center
            ">
        <PortableText
                components={{}}
                value={data.sanityData.mainPage.aboutUs}
                onMissingComponent={false}
        />
    </div>
</section>

<ParallaxWrapper>
    {@render parallax(data.sanityData.mainPage.parallax2)}
</ParallaxWrapper>

<section id="products">
    <CatalogSection data={data.sanityData.allProducts}/>
</section>

<ParallaxWrapper>
    {@render parallax(data.sanityData.mainPage.parallax3)}
</ParallaxWrapper>

<section id="our-team" class="px-2">
    <br/>
    <div class="container mx-auto text-slate-700 h-full">
        <div>
            <h1 class="text-center text-6xl md:text-[75px] font-bold p-4">{data.sanityData.mainPage.team.title}</h1>
            <div class="app-header p-8">
                <div class="container mx-auto py-8 text-center prose max-w-max prose-lg dark:prose-invert prose-headings:text-slate-700 prose-headings:m-2
            prose-p:text-slate-700 prose-p:m-2 prose-strong:text-orange-700 prose-h1:text-[75px] prose-h1:p-4
            prose-li:bg-[url(images/icons/40px/154.png)] prose-li:bg-no-repeat prose-li:pl-12 prose-li:text-justify
            prose-ul:flex prose-ul:flex-col prose-ul:gap-2 prose-ul:justify-items-center prose-ul:list-none prose-ul:max-w-[900px]
            flex flex-col items-center
            ">
                    <PortableText components={{}} value={data.sanityData.mainPage.team.subtitle} />
                </div>
            </div>
        </div>
        <div class="pt-8">
            {@render TeamMembers(data.sanityData.mainPage.team.members)}
            <div class="p-2 m-8 text-center">
                <div class="app-header p-8">
                    <div class="container mx-auto py-8 text-center prose max-w-max prose-lg dark:prose-invert prose-headings:text-slate-700 prose-headings:m-2
            prose-p:text-slate-700 prose-p:m-2 prose-strong:text-orange-700 prose-h1:text-[75px] prose-h1:p-4
            prose-li:bg-[url(images/icons/40px/154.png)] prose-li:bg-no-repeat prose-li:pl-12 prose-li:text-justify
            prose-ul:flex prose-ul:flex-col prose-ul:gap-2 prose-ul:justify-items-center prose-ul:list-none prose-ul:max-w-[900px]
            flex flex-col items-center
            ">
                        <PortableText components={{}} value={data.sanityData.mainPage.team.note} />
                    </div>
            </div>
        </div>
    </div>
    </div>
</section>

<ParallaxWrapper>
    {@render parallax(data.sanityData.mainPage.parallax4)}
</ParallaxWrapper>

<section id="faq" class="px-2">
    <br />
    <div class="container mx-auto text-slate-700 h-full">
        <div>
            <h1 class="text-center text-6xl md:text-[75px] font-bold p-4">Frequently Asked Questions</h1>
            <div class="app-header p-8">
                <p class="text-center font-sans text-[25px] italic">
                    Something’s not clear? <EmphasisText>Check Below!</EmphasisText>
                </p>
                <p class="text-center font-sans text-[25px] italic">
                    We tried to <EmphasisText> answer</EmphasisText> any question you might have.
                </p>
            </div>
        </div>
        <div class={'md:w-2/3 mx-auto'}>
            <div>
                {#each qnaList as qna (qna)}
                    <div on:click={()=> qna.showAnswer = !qna.showAnswer} class="flex flex-col gap-2 m-8 p-2 border-4 rounded-lg cursor-pointer">
                        <p>Q. {qna.question}</p>
                        <p class={`${qna.showAnswer ? 'opacity-100': ' hidden opacity-0 translate-y-96'} transition duration-500 ease-in-out transform translate-y-0`}>A. {qna.answer}</p>
                    </div>
                {/each}
            </div>
        </div>

    </div>
</section>

<ParallaxWrapper>
    {@render parallax(data.sanityData.mainPage.parallax5)}
</ParallaxWrapper>

<section id="contact" class={'px-2 pb-16'}>
    <br />
    <div class={'container mx-auto text-slate-700 h-full'}>
        <div class={''}>
            <h1 class={'text-center text-6xl md:text-[75px] font-bold p-2'}>Get In Touch</h1>
            <div class={'app-header p-4 text-center font-sans text-[20px] italic flex flex-col justify-items-center gap-2'}>
                <p>
                    <EmphasisText>Inquiries</EmphasisText> and <EmphasisText>requests for advice</EmphasisText> are very welcome!
                </p>
                <div class={'flex gap-4 self-center w-96'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>

                    <a href="mailto:{data.sanityData.siteSettings.email}"><EmphasisText>{data.sanityData.siteSettings.email}</EmphasisText></a>
                </div>
                <div class={'flex gap-4 self-center w-96'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>

                    <a href="tel:{data.sanityData.siteSettings.phone}"><EmphasisText>{data.sanityData.siteSettings.phone}</EmphasisText></a>
                </div>
            </div>
        </div>

        <GetInTouchForm formData={data.userMessageSchema} />

    </div>
</section>

{#snippet parallax(data: Parallax)}
    <div class="h-[100%] py-48 relative">
        <div class="absolute top-1/2 md:left-1/2 -translate-y-1/2 md:-translate-x-1/2 z-10 text-center p-2">
            <h1 class="text-[50px] font-bold capitalize text-white drop-shadow-md app-text-shadow-black ">
                {data.title}
            </h1>

            {#if data.subtitle1}
                <h1 class="text-[25px] font-semibold capitalize text-white drop-shadow-md app-text-shadow-black ">
                    {data.subtitle1}
                </h1>
            {/if}

            {#if data.subtitle2}
                <h1 class="text-[20px] font-semibold capitalize text-white drop-shadow-md app-text-shadow-black ">
                    {data.subtitle2}
                </h1>
            {/if}


            {#if data.textList}
                <div>
                    <ul class="flex flex-col gap-2 justify-items-center text-center md:text-[20px] ">
                        {#each data.textList as text}
                            <li class="p-2 text-green-50 font-semibold">
                                <span class="pr-8"></span>
                                {text}
                            </li>
                        {/each}
                    </ul>
                </div>
            {/if}

        </div>
    </div>
{/snippet}

{#snippet TeamMembers(teamData: TeamMember[])}
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        {#each teamData as member (member)}
            <div class="flex flex-col items-center text-center">
                <div class="justify-center p-2">
                    <img class="object-cover rounded-full w-48 h-48 border-2 border-[#01414e] shadow-sm shadow-[#01414e]"
                         src={`/images/${member.imagePath}`}
                         alt={member.name}
                         height={150}
                         width={150} />
                </div>
                <div>
                    <p class="text-lg font-semibold">{member.name}</p>
                    <p class="text-orange-600 font-semibold">{member.position}</p>
                </div>
                <div>
                    <p>{member.description}</p>
                </div>
            </div>
        {/each}
    </div>
{/snippet}