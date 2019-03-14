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
                        <router-link to="/" :class="tag('/')"><span></span>Home</router-link>
                    </li>
                    <li>
                        <router-link to="/unit1" :class="tag('/unit1')"><span></span>Unit 1</router-link>
                    </li>
                    <li>
                        <router-link to="/unit2" :class="tag('/unit2')"><span></span>Unit 2</router-link>
                    </li>
                    <li>
                        <router-link to="/unit3" :class="tag('/unit3')"><span></span>Unit 3</router-link>
                    </li>
                    <li>
                        <router-link to="/unit4" :class="tag('/unit4')"><span></span>Unit 4</router-link>
                    </li>
                </ul>


                <div id="templatemo_right_menu">
                    <li>
                        <router-link to="/library" class="first">Bibliography 3</router-link>
                    </li>
                </div>
            </div> <!-- end of menu -->


            <div id="templatemo_banner" :class="tagPic()" ref="pic">
                <router-view/>
            </div> <!-- end of banner -->

            <div id="templatemo_footer">

                <ul class="footer_menu">
                    <li>
                        <router-link :style="tagLink('/')" to="/">Home</router-link>
                    </li>
                    <li>
                        <router-link :style="tagLink('/unit1')" to="/unit1">Unit 1</router-link>
                    </li>
                    <li>
                        <router-link :style="tagLink('/unit2')" to="/unit2">Unit 2</router-link>
                    </li>
                    <li>
                        <router-link :style="tagLink('/unit3')" to="/unit3">Unit 3</router-link>
                    </li>
                    <li>
                        <router-link :style="tagLink('/unit4')" to="/unit4">Unit 4</router-link>
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
            tag(val) {
                return val == this.$router.history.current.path ? 'current' : ''
            },
            tagLink(val) {
                let exist = val == this.$router.history.current.path;
                return {textDecoration: exist ? 'underline' : ''}
            },
            tagPic() {
                return 'u' + this.$router.history.current.path.substr(-1);
            }
        }
    }
</script>

<style>
    @import './assets/templatemo_style.css';
</style>
