<template>
    <div id="app">
        <div id="templatmeo_container">
            <div id="templatemo_site_title_bar">
                <div id="site_title"><br>
                    <h1><a>
                        <span>Professional English </span>
                        <span>for Students of Logistics</span>
                    </a></h1>
                </div>

            </div> <!-- templatemo_site_title_bar -->

            <div id="templatemo_menu">
                <ul id="templatemo_left_menu">
                    <li>
                        <router-link to="/" :class="{current:tag('/')}"><span></span>Home</router-link>
                    </li>
                    <li>
                        <router-link to="/unit1" :class="{current:tag('/unit1')}"><span></span>Unit 1</router-link>
                    </li>
                    <li>
                        <router-link to="/unit2" :class="{current:tag('/unit2')}"><span></span>Unit 2</router-link>
                    </li>
                    <li>
                        <router-link to="/unit3" :class="{current:tag('/unit3')}"><span></span>Unit 3</router-link>
                    </li>
                    <li>
                        <router-link to="/unit4" :class="{current:tag('/unit4')}"><span></span>Unit 4</router-link>
                    </li>
                </ul>


                <ul id="templatemo_right_menu">
                    <li><a href="" class="first">Bibliography</a></li>
                </ul>
            </div> <!-- end of menu -->


            <div id="templatemo_banner">

                <router-view/>

                <div id="banner_left_section">


                </div>

                <div id="login_section">
                </div>

                <div class="cleaner"></div>
            </div> <!-- end of banner -->

            <div id="templatemo_footer">

                <ul class="footer_menu">
                    <li>
                        <router-link :style="{textDecoration: tag('/')?'underline':''}" to="/"><span></span>Home
                        </router-link>
                    </li>
                    <li>
                        <router-link :style="{textDecoration: tag('/unit1')?'underline':''}" to="/unit1"><span></span>Unit
                            1
                        </router-link>
                    </li>
                    <li>
                        <router-link :style="{textDecoration: tag('/unit2')?'underline':''}" to="/unit2"><span></span>Unit
                            2
                        </router-link>
                    </li>
                    <li>
                        <router-link :style="{textDecoration: tag('/unit3')?'underline':''}" to="/unit3"><span></span>Unit
                            3
                        </router-link>
                    </li>
                    <li>
                        <router-link :style="{textDecoration: tag('/unit4')?'underline':''}" to="/unit4"><span></span>Unit
                            4
                        </router-link>
                    </li>
                </ul>

                Россия Казань, 2017
            </div> <!-- end of footer -->
        </div>
    </div>
</template>

<script>


    export default {
        name: 'app',
        methods: {
            tag: function (val) {
                return '#' + val == document.location.hash
            }
        }
    }
</script>

<style>
    @import './assets/templatemo_style.css';
</style>
