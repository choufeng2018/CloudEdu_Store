<template>
  <div class="mapId" id="mapId"></div>
</template>

<script>
// import { isRequired } from 'assets/uitls/validate'
export default {
  name: 'PageIndex',
  data () {
    return {
      mapHeight: '700px'
    }
  },
  created () {
    var self = this
    // self.initQQMap()

    this.loadMap().then(function () {
      // var geolocation = new window.qq.maps.Geolocation('L2VBZ-IM6L6-ENCSE-EKZMB-NKZN2-3MB2O', 'TICKETSYSTEM')
      // geolocation.getIpLocation((position) => {
      //   console.log(position)
      self.initQQMap()
      // })
    })
  },
  methods: {
    loadMap () {
      return new Promise(function (resolve, reject) {
        window.init = function () {
          resolve(window.qq)
        }
        var script2 = document.createElement('script')
        script2.type = 'text/javascript'
        script2.src = 'https://map.qq.com/api/js?v=2.exp&key=L2VBZ-IM6L6-ENCSE-EKZMB-NKZN2-3MB2O&callback=init'

        script2.onerror = reject
        var script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = 'https://3gimg.qq.com/lightmap/components/geolocation/geolocation.min.js'

        script.onerror = reject
        document.head.appendChild(script)
        document.head.appendChild(script2)
        console.log(document.head)
      })
    },
    initQQMap (latitude, longitude) {
      var mapLatlng = new window.qq.maps.LatLng(latitude || 39.916527, longitude || 116.397128)
      var mapOptions = {
        center: mapLatlng,
        zoom: 9
      }
      var mapId = document.getElementById('mapId')
      var mapQQ = new window.qq.maps.Map(mapId, mapOptions)
      console.log(mapQQ)
    }
  }
}
</script>
<style lang="stylus" scoped>
.mapId {
  width: 100%;
  height: 100vh;
}
</style>
