<template>
  <v-container>
    <v-row class="justify-center align-center flex-column mt-10">
      <v-col cols="12" class="text-center">
        <v-avatar size="180" image="@/assets/bokukoha_icon.jpg"></v-avatar>

        <div class="text-center mt-3">
          <a v-for="item in links" :key="item.title" :href="item.href" :title="item.title"
            rel="noopener noreferrer" target="_blank">
            <v-btn variant="plain" :size="item.size" :icon="item.icon"></v-btn>
          </a>
        </div>
      </v-col>
      <v-col cols="12" sm="7" md="6" lg="5" xl="4">
        <v-sheet class="d-flex flex-column rounded-lg" :elevation="4" rounded>
          <div class="mx-5 my-3 text-left">
            <h1 class="text-h5 font-weight-bold"># 自己紹介</h1>
            <p class="mt-3"><strong>名前</strong>こは <br> <strong>年齢</strong>20 <br> <strong>性別</strong>男 <br> <strong>趣味</strong>PCゲーム , 散歩 , 飲酒 , 音楽 , 聖地巡礼旅行 <br> <strong>言語</strong> JPN◎ EN〇</p>
          </div>
        </v-sheet>
      </v-col>
      <v-col class="mt-1" cols="12" sm="7" md="6" lg="5" xl="4">
        <v-sheet class="d-flex flex-column rounded-lg" :elevation="4" rounded>
          <div class="mx-5 my-3 text-left">
            <h1 class="text-h5 font-weight-bold"># ゲーム</h1>
            <p class="mt-3"><strong>原神</strong> 神里綾華、ヌヴィレット、フリーナ、珊瑚宮心海</p>
            <p><strong>崩壊スターレイル</strong> 花火、ヘルタ、銀狼、アベンチュリン</p>
            <p class="mt-4">もうやってないけどブルアカ、ウマ娘、学マスも好きです。<br> PCゲーは Minecraft、MHWI、OW2、Apex 等</p>
          </div>
        </v-sheet>
      </v-col>
      <v-col class="mt-1" cols="12" sm="7" md="6" lg="5" xl="4">
        <v-sheet class="d-flex flex-column rounded-lg" :elevation="4" rounded>
          <div class="mx-5 my-3 text-left">
            <h1 class="text-h5 font-weight-bold"># 音楽</h1>
            <p class="mt-3">これといってどのアーティストが好きとかはないですが、YunomiやAiobahnみたいな電子音楽、HARDCORE TANO*Cとか、あとは普通にJ-popも聞きます。</p>
          </div>
        </v-sheet>
      </v-col>
      <v-col class="mt-1" cols="12" sm="7" md="6" lg="5" xl="4">
        <v-sheet class="d-flex flex-column rounded-lg" :elevation="4" rounded>
          <div class="mx-5 my-3 text-left">
            <h1 class="text-h5 font-weight-bold"># ADV</h1>
            <p class="mt-3">2024年5月から始めました！以下プレイ済みリスト (上からプレイ順)</p>
            <p class="mt-3"><strong>2024年</strong> <br> ・サノバウィッチ <br> ・天使☆騒々 RE-BOOT! <br> ・さくらの雲＊スカアレットの恋 <br> ・サクラノ詩 -櫻の森の上を舞う- <br> ・サクラノ刻 -櫻の森の下を歩む- <br> ・さくら、もゆ。-as the Night's, Reincarnation-</p>
          </div>
        </v-sheet>
      </v-col>
      <v-col class="mt-1" cols="12" sm="7" md="6" lg="5" xl="4">
        <v-sheet class="d-flex flex-column rounded-lg" :elevation="4" rounded>
          <div class="mx-5 my-3 text-left">
            <h1 class="text-h5 font-weight-bold"># 鯖とか</h1>
            <p class="mt-3"> メルカリとかでパーツ拾って組んだpcにProxmox入れて遊んでます。CPUはi7-6700K、RAMは48GBとかです。いろいろとやってみたいことはあるんですが、お金とストレージが足りないです。</p>
          </div>
        </v-sheet>
      </v-col>
      <v-col class="mt-1" cols="12" sm="7" md="6" lg="5" xl="4">
        <v-sheet class="d-flex flex-column rounded-lg" :elevation="4" rounded>
          <div class="mx-5 my-3 text-left">
            <h1 class="text-h5 font-weight-bold"># このサイトについて</h1>
            <p class="mt-3"> Vueで作ったものをCloudflare Pagesでビルド&デプロイして公開しています。自鯖でホストしてる全く同じ内容の別ページもあります。将来的にこのページをプロフィールにして、ブログサイトを解説したいなぁとか考えていたり。</p>
          </div>
        </v-sheet>
      </v-col>
      <v-col class="mt-1" cols="12" sm="7" md="6" lg="5" xl="4">
        <v-sheet class="d-flex flex-column rounded-lg" :elevation="4" rounded>
          <div class="mx-5 my-3 text-left">
            <h1 class="text-h5 font-weight-bold"># 適当</h1>
            <p class="mt-3">ここまで読んでくださってありがとうございます。趣味あう人と話すのは楽しくて好きなので、気軽に話しかけてください。Discord含むゲームとかのフレ申請は知り合いなら通します！よろしくお願いします！</p>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import MisskeyIcon from "@/components/icons/MisskeyIcon.vue";
import XIcon from "@/components/icons/XIcon.vue";
import GitHubIcon from "@/components/icons/GithubIcon.vue";
import DiscordIcon from "@/components/icons/DiscordIcon.vue";

const links = [
  {
    title: 'Misskey.io',
    icon: MisskeyIcon,
    href: 'https://misskey.io/@bokukoha',
    size: 45,
  },
  {
    title: 'Github',
    icon: GitHubIcon,
    href: 'https://github.com/Kohxax',
    size: 45,
  },
  {
    title: 'X',
    icon: XIcon,
    href: 'https://x.com/Kohxax',
    size: 45,
  },
  {
    title: 'Discord',
    icon: DiscordIcon,
    href: 'https://discord.com/users/441869177389580308',
    size: 45,
  },
]
</script>

<style lang="css" scoped>
h1,
v-avatar {
  user-select: none;
}

p {
  user-select: none;
  line-height: 28px;
}

strong {
  margin-right: 10px;
}

</style>