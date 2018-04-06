import {mapGetters} from "vuex"
export default{
  methods: {
    initLanguage(){
      var lang = sessionStorage.getItem("lang");
      if (lang) {
        this.$store.commit("SET_DEFAULT_LANGUAGE", lang);
      }
    }
  },
  computed: {
    ...mapGetters({
      languages: "getLanguages"
    }),
    lang: {
      get () {
        var lang = sessionStorage.getItem('lang') || 'en';
        this.$i18n.locale = lang;
        return lang;
      },
      set (value) {
        this.$i18n.locale = value;
        sessionStorage.setItem("lang", value);
        this.$store.commit("SET_DEFAULT_LANGUAGE", value);
      }
    }
  }
}
