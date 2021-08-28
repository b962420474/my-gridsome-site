<template>
  <Layout>
    <!-- Page Header-->
    <header class="masthead" :style="{'background-image': 'url('+this.GRIDSOME_API+$page.general.edges[0].node.cover.url+')'}">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>{{$page.general.edges[0].node.title}}</h1>
              <span class="subheading">{{$page.general.edges[0].node.subtitle}}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <!-- Post preview-->
          <div class="post-preview" v-for="edge in $page.posts.edges" :key="edge.node.id">
            <g-link :to="'/post/'+edge.node.id">
              <h2 class="post-title">{{edge.node.title}}</h2>
            </g-link>
            <p class="post-meta">
              Posted on {{edge.node.created_at}}
            </p>
            <hr class="my-4" />
          </div>
          <!-- Divider-->
          
          <!-- Pager-->
          <Pager :info="$page.posts.pageInfo" />
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query($page: Int){
  posts: allStrapiPosts(perPage:4, page:$page) @paginate{
    pageInfo {
      totalPages
      currentPage
    }
    edges{
      node{
        id
        title
        content
        created_at
        tags{
          id
          title
        }
      }
    }
  }
  general:allStrapiGeneral{
    edges{
      node{
        id
        title
        subtitle
        cover{
          url
        }
      }
    }
  }
}
</page-query>
<script>
import {Pager} from 'gridsome'
export default {
  name: "HomePage",
  components:{
    Pager
  },
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>

<style>
</style>
