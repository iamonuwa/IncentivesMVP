<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="img/brand/ribbonlogo.png" style="height:100%; width:130px">
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <router-link to="/">
                        <img src="img/brand/ribbonlogo.png">
                    </router-link>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" v-scroll-to="'#About'" href="#" target="_blank"
                       data-toggle="tooltip" @click="reRoute('#About')">
                        About
                        
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" v-scroll-to="'#Integration'" href="#" target="_blank"
                       data-toggle="tooltip" @click="reRoute('#Integration')">
                        Integration
                        
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" v-scroll-to="'#UseCase'" href="#" target="_blank"
                       data-toggle="tooltip" @click="reRoute('#UseCase')">
                        Use Cases
                        
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" v-scroll-to="'#Stakeholders'" href="#" target="_blank"
                       data-toggle="tooltip" @click="reRoute('#Stakeholders')">
                        Stakeholders
                        
                    </a>
                </li>
            </ul>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://github.com/ribbonblockchain" target="_blank"
                       data-toggle="tooltip" title="View source code on github!">
                        <i class="fa fa-github"></i> Github
                    </a>
                </li>
                
                <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
                    <a slot="title" href="#" class="btn btn-neutral btn-icon" data-toggle="dropdown" role="button">
                        <i class="ni ni-ui-04 d-lg-none"></i>
                        <i class="fa fa-location-arrow mr-2"></i>
                        <span class="nav-link-inner--text">Try MVP</span>
                    </a>
                    <div class="dropdown-menu-inner">
                        <router-link to="/ribbonDashboard"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-default rounded-circle text-white">
                                <i class="fa fa-tachometer"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-default mb-md-1">Ribbon Ecosystem Dashboard</h5>
                                <p class="description d-none d-md-inline-block mb-0"> Add new Projects to the platform.
                                    View Holistic information on the state of all programs.
                                     Gain insight into what makes projects successful.
                                     </p>
                            </div>
                        </router-link>
                        <router-link to="/sponsorDashboard"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                <i class="ni ni-money-coins"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h6 class="heading text-primary mb-md-1">Sponsor Dashboard</h6>
                                <p class="description d-none d-md-inline-block mb-0">Contribute to an incentive program. 
                                        Funding is used to pay for incentives.  
                                        View a full audit trail of how sponsorship money was used.  </p>
                            </div>
                        </router-link>
                        <router-link to="/managerDashboard"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-success rounded-circle text-white">
                                <i class="ni ni-istanbul"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-success mb-md-1">Manager Dashboard</h5>
                                <p class="description d-none d-md-inline-block mb-0">Allocate incentive allowances to practitioners. 
                                        Register patients and users for a program.  
                                        View program user engagement statistics. </p>
                            </div>
                        </router-link>
                        <router-link to="/practitionerDashboard"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-info rounded-circle text-white">
                                <i class="fa fa-user-md"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-info mb-md-1">Practitioner Dashboard</h5>
                                <p class="description d-none d-md-inline-block mb-0">Allocate tokens to users and patients based on their activity.
                                        Receive rewards for positive patient feedback.</p>
                            </div>
                        </router-link>
                        <router-link to="/userDashboard"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                <i class="fa fa-user"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-warning mb-md-1">User and Patient Dashboard</h5>
                                <p class="description d-none d-md-inline-block mb-0">Manage your incentive balances and spend them where you want. 
                                        View your past history within a particular program.</p>
                            </div>
                        </router-link>
                    </div>
                </base-dropdown>

            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  },
  data(){
      return{
          scrollId: "",
          options: {
          container: "#container",
          easing: "ease-in",
          offset: -60,
          force: true,
          cancelable: true,
          onStart: function(element) {
            // scrolling started
          },
          onDone: function(element) {
            // scrolling is done
          },
          onCancel: function() {
            // scrolling has been interrupted
          },
          x: false,
          y: true
        }
      }
  },
  methods: {
    reRoute(id) {
      //   console.log(this.$route.fullPath != "/");
      if (this.$route.fullPath != "/") {
        this.$router.push({ path: "/" });
        console.log(id);
        this.scrollId = id

        setTimeout(this.scroll, 500);
      }
    },
    scroll() {
      console.log(this.scrollId);
      console.log("SCROLELD");
      this.$scrollTo(this.scrollId);
    }
  }
};
</script>
<style>
</style>
