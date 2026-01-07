(function(){
  if (typeof a6 === 'undefined') { console.error('a6 constructor not found in page'); return; }

  // Use existing globals when available, otherwise provide minimal fallbacks
  var b0 = window.b0 || { y: { a1y: 0, a25: 0xAB, send: function(type,data){ console.log('b0.y.send', type, data); } } };
  var ax = window.ax || { aEP: 0, aHC: 0 };
  var l = window.l || { dy: 0, dq: 0 };

  var bD = new a6();

  function toHex(u8) {
    u8 = u8 instanceof ArrayBuffer ? new Uint8Array(u8) : u8;
    return Array.prototype.map.call(u8, function(b){ return ('0' + b.toString(16)).slice(-2); }).join('');
  }

  var tthis = {};
  tthis.aHJ = function(){
    bD.a7(58);
    bD.a8(1, 0);
    bD.a8(6, 5);
    bD.a8(8, b0.y.a1y);
    bD.a8(10, ax.aEP);
    bD.a8(9, ax.aHC);
    bD.a8(10, l.dy);
    bD.a8(14, l.dq);
    // bD.aC is the Uint8Array containing the packet bytes
    if (b0 && b0.y && typeof b0.y.send === 'function') {
      b0.y.send(b0.y.a25, bD.aC);
    } else {
      console.log('packet', bD.aC, 'hex', toHex(bD.aC));
    }
    return bD.aC;
  };

  // Execute and expose for inspection
  var packet = tthis.aHJ();
  console.log('replicate_packet: packet Uint8Array length=', packet && packet.length, 'hex=', packet && toHex(packet));
  window._replicatePacket = { bD: bD, b0: b0, ax: ax, l: l, tthis: tthis, packetHex: packet && toHex(packet) };
})();
