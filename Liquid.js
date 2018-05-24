function Liquid(vol, pg, vg, nico, other) {
  this.volume = vol;
  this.pg = pg;
  this.vg = vg;
  this.nicotine = nico;
  this.volume_other = other;
  this.add(liquid) = () => {
    console.log('adding');
  };
  this.remove(liquid) = () => {
    console.log('removing');
  };
};

module.exports = Liquid;
