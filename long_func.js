function _(t, e) {
    var a, n, r, s, o, l, h, _, u, c, b, g, m, bt, gt, mt, wt, pt, vt, kt, yt, xt, zt, Bt, St = 0,
        Et = new w.Buf8(4),
        At = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
    if (!t || !t.state || !t.output || !t.input && 0 !== t.avail_in) return N;
    a = t.state, a.mode === X && (a.mode = W), o = t.next_out, r = t.output, h = t.avail_out, s = t.next_in, n = t.input, l = t.avail_in, _ = a.hold, u = a.bits, c = l, b = h, xt = Z;
    t: for (;;) switch (a.mode) {
        case T:
            if (0 === a.wrap) {
                a.mode = W;
                break
            }
            for (; u < 16;) {
                if (0 === l) break t;
                l--, _ += n[s++] << u, u += 8
            }
            if (2 & a.wrap && 35615 === _) {
                a.check = 0, Et[0] = 255 & _, Et[1] = _ >>> 8 & 255, a.check = v(a.check, Et, 2, 0), _ = 0, u = 0, a.mode = F;
                break
            }
            if (a.flags = 0, a.head && (a.head.done = !1), !(1 & a.wrap) || (((255 & _) << 8) + (_ >> 8)) % 31) {
                t.msg = "incorrect header check", a.mode = _t;
                break
            }
            if ((15 & _) !== U) {
                t.msg = "unknown compression method", a.mode = _t;
                break
            }
            if (_ >>>= 4, u -= 4, yt = (15 & _) + 8, 0 === a.wbits) a.wbits = yt;
            else if (yt > a.wbits) {
                t.msg = "invalid window size", a.mode = _t;
                break
            }
            a.dmax = 1 << yt, t.adler = a.check = 1, a.mode = 512 & _ ? q : X, _ = 0, u = 0;
            break;
        case F:
            for (; u < 16;) {
                if (0 === l) break t;
                l--, _ += n[s++] << u, u += 8
            }
            if (a.flags = _, (255 & a.flags) !== U) {
                t.msg = "unknown compression method", a.mode = _t;
                break
            }
            if (57344 & a.flags) {
                t.msg = "unknown header flags set", a.mode = _t;
                break
            }
            a.head && (a.head.text = _ >> 8 & 1), 512 & a.flags && (Et[0] = 255 & _, Et[1] = _ >>> 8 & 255, a.check = v(a.check, Et, 2, 0)), _ = 0, u = 0, a.mode = L;
        case L:
            for (; u < 32;) {
                if (0 === l) break t;
                l--, _ += n[s++] << u, u += 8
            }
            a.head && (a.head.time = _), 512 & a.flags && (Et[0] = 255 & _, Et[1] = _ >>> 8 & 255, Et[2] = _ >>> 16 & 255, Et[3] = _ >>> 24 & 255, a.check = v(a.check, Et, 4, 0)), _ = 0, u = 0, a.mode = H;
        case H:
            for (; u < 16;) {
                if (0 === l) break t;
                l--, _ += n[s++] << u, u += 8
            }
            a.head && (a.head.xflags = 255 & _, a.head.os = _ >> 8), 512 & a.flags && (Et[0] = 255 & _, Et[1] = _ >>> 8 & 255, a.check = v(a.check, Et, 2, 0)), _ = 0, u = 0, a.mode = j;
        case j:
            if (1024 & a.flags) {
                for (; u < 16;) {
                    if (0 === l) break t;
                    l--, _ += n[s++] << u, u += 8
                }
                a.length = _, a.head && (a.head.extra_len = _), 512 & a.flags && (Et[0] = 255 & _, Et[1] = _ >>> 8 & 255, a.check = v(a.check, Et, 2, 0)), _ = 0, u = 0
            } else a.head && (a.head.extra = null);
            a.mode = K;
        case K:
            if (1024 & a.flags && (g = a.length, g > l && (g = l), g && (a.head && (yt = a.head.extra_len - a.length, a.head.extra || (a.head.extra = new Array(a.head.extra_len)), w.arraySet(a.head.extra, n, s, g, yt)), 512 & a.flags && (a.check = v(a.check, n, g, s)), l -= g, s += g, a.length -= g), a.length)) break t;
            a.length = 0, a.mode = M;
        case M:
            if (2048 & a.flags) {
                if (0 === l) break t;
                g = 0;
                do yt = n[s + g++], a.head && yt && a.length < 65536 && (a.head.name += String.fromCharCode(yt)); while (yt && g < l);
                if (512 & a.flags && (a.check = v(a.check, n, g, s)), l -= g, s += g, yt) break t
            } else a.head && (a.head.name = null);
            a.length = 0, a.mode = P;
        case P:
            if (4096 & a.flags) {
                if (0 === l) break t;
                g = 0;
                do yt = n[s + g++], a.head && yt && a.length < 65536 && (a.head.comment += String.fromCharCode(yt)); while (yt && g < l);
                if (512 & a.flags && (a.check = v(a.check, n, g, s)), l -= g, s += g, yt) break t
            } else a.head && (a.head.comment = null);
            a.mode = Y;
        case Y:
            if (512 & a.flags) {
                for (; u < 16;) {
                    if (0 === l) break t;
                    l--, _ += n[s++] << u, u += 8
                }
                if (_ !== (65535 & a.check)) {
                    t.msg = "header crc mismatch", a.mode = _t;
                    break
                }
                _ = 0, u = 0
            }
            a.head && (a.head.hcrc = a.flags >> 9 & 1, a.head.done = !0), t.adler = a.check = 0, a.mode = X;
            break;
        case q:
            for (; u < 32;) {
                if (0 === l) break t;
                l--, _ += n[s++] << u, u += 8
            }
            t.adler = a.check = i(_), _ = 0, u = 0, a.mode = G;
        case G:
            if (0 === a.havedict) return t.next_out = o, t.avail_out = h, t.next_in = s, t.avail_in = l, a.hold = _, a.bits = u, C;
            t.adler = a.check = 1, a.mode = X;
        case X:
            if (e === E || e === A) break t;
        case W:
            if (a.last) {
                _ >>>= 7 & u, u -= 7 & u, a.mode = ht;
                break
            }
            for (; u < 3;) {
                if (0 === l) break t;
                l--, _ += n[s++] << u, u += 8
            }
            switch (a.last = 1 & _, _ >>>= 1, u -= 1, 3 & _) {
                case 0:
                    a.mode = J;
                    break;
                case 1:
                    if (d(a), a.mode = at, e === A) {
                        _ >>>= 2, u -= 2;
                        break t
                    }
                    break;
                case 2:
                    a.mode = $;
                    break;
                case 3:
                    t.msg = "invalid block type", a.mode = _t
            }
            _ >>>= 2, u -= 2;
            break;
        case J:
            for (_ >>>= 7 & u, u -= 7 & u; u < 32;) {
                if (0 === l) break t;
                l--, _ += n[s++] << u, u += 8
            }
            if ((65535 & _) !== (_ >>> 16 ^ 65535)) {
                t.msg = "invalid stored block lengths", a.mode = _t;
                break
            }
            if (a.length = 65535 & _, _ = 0, u = 0, a.mode = Q, e === A) break t;
        case Q:
            a.mode = V;
        case V:
            if (g = a.length) {
                if (g > l && (g = l), g > h && (g = h), 0 === g) break t;
                w.arraySet(r, n, s, g, o), l -= g, s += g, h -= g, o += g, a.length -= g;
                break
            }
            a.mode = X;
            break;
        case $:
            for (; u < 14;) {
                if (0 === l) break t;
                l--, _ += n[s++] << u, u += 8
            }
            if (a.nlen = (31 & _) + 257, _ >>>= 5, u -= 5, a.ndist = (31 & _) + 1, _ >>>= 5, u -= 5, a.ncode = (15 & _) + 4, _ >>>= 4, u -= 4, a.nlen > 286 || a.ndist > 30) {
                t.msg = "too many length or distance symbols", a.mode = _t;
                break
            }
            a.have = 0, a.mode = tt;
        case tt:
            for (; a.have < a.ncode;) {
                for (; u < 3;) {
                    if (0 === l) break t;
                    l--, _ += n[s++] << u, u += 8
                }
                a.lens[At[a.have++]] = 7 & _, _ >>>= 3, u -= 3
            }
            for (; a.have < 19;) a.lens[At[a.have++]] = 0;
            if (a.lencode = a.lendyn, a.lenbits = 7, zt = {
                    bits: a.lenbits
                }, xt = y(x, a.lens, 0, 19, a.lencode, 0, a.work, zt), a.lenbits = zt.bits, xt) {
                t.msg = "invalid code lengths set", a.mode = _t;
                break
            }
            a.have = 0, a.mode = et;
        case et:
            for (; a.have < a.nlen + a.ndist;) {
                for (; St = a.lencode[_ & (1 << a.lenbits) - 1], gt = St >>> 24, mt = St >>> 16 & 255, wt = 65535 & St, !(gt <= u);) {
                    if (0 === l) break t;
                    l--, _ += n[s++] << u, u += 8
                }
                if (wt < 16) _ >>>= gt, u -= gt, a.lens[a.have++] = wt;
                else {
                    if (16 === wt) {
                        for (Bt = gt + 2; u < Bt;) {
                            if (0 === l) break t;
                            l--, _ += n[s++] << u, u += 8
                        }
                        if (_ >>>= gt, u -= gt, 0 === a.have) {
                            t.msg = "invalid bit length repeat", a.mode = _t;
                            break
                        }
                        yt = a.lens[a.have - 1], g = 3 + (3 & _), _ >>>= 2, u -= 2
                    } else if (17 === wt) {
                        for (Bt = gt + 3; u < Bt;) {
                            if (0 === l) break t;
                            l--, _ += n[s++] << u, u += 8
                        }
                        _ >>>= gt, u -= gt, yt = 0, g = 3 + (7 & _), _ >>>= 3, u -= 3
                    } else {
                        for (Bt = gt + 7; u < Bt;) {
                            if (0 === l) break t;
                            l--, _ += n[s++] << u, u += 8
                        }
                        _ >>>= gt, u -= gt, yt = 0, g = 11 + (127 & _), _ >>>= 7, u -= 7
                    }
                    if (a.have + g > a.nlen + a.ndist) {
                        t.msg = "invalid bit length repeat", a.mode = _t;
                        break
                    }
                    for (; g--;) a.lens[a.have++] = yt
                }
            }
            if (a.mode === _t) break;
            if (0 === a.lens[256]) {
                t.msg = "invalid code -- missing end-of-block", a.mode = _t;
                break
            }
            if (a.lenbits = 9, zt = {
                    bits: a.lenbits
                }, xt = y(z, a.lens, 0, a.nlen, a.lencode, 0, a.work, zt), a.lenbits = zt.bits, xt) {
                t.msg = "invalid literal/lengths set", a.mode = _t;
                break
            }
            if (a.distbits = 6, a.distcode = a.distdyn, zt = {
                    bits: a.distbits
                }, xt = y(B, a.lens, a.nlen, a.ndist, a.distcode, 0, a.work, zt), a.distbits = zt.bits, xt) {
                t.msg = "invalid distances set", a.mode = _t;
                break
            }
            if (a.mode = at, e === A) break t;
        case at:
            a.mode = it;
        case it:
            if (l >= 6 && h >= 258) {
                t.next_out = o, t.avail_out = h, t.next_in = s, t.avail_in = l, a.hold = _, a.bits = u, k(t, b), o = t.next_out, r = t.output, h = t.avail_out, s = t.next_in, n = t.input, l = t.avail_in, _ = a.hold, u = a.bits, a.mode === X && (a.back = -1);
                break
            }
            for (a.back = 0; St = a.lencode[_ & (1 << a.lenbits) - 1], gt = St >>> 24, mt = St >>> 16 & 255, wt = 65535 & St, !(gt <= u);) {
                if (0 === l) break t;
                l--, _ += n[s++] << u, u += 8
            }
            if (mt && 0 === (240 & mt)) {
                for (pt = gt, vt = mt, kt = wt; St = a.lencode[kt + ((_ & (1 << pt + vt) - 1) >> pt)], gt = St >>> 24, mt = St >>> 16 & 255, wt = 65535 & St, !(pt + gt <= u);) {
                    if (0 === l) break t;
                    l--, _ += n[s++] << u, u += 8
                }
                _ >>>= pt, u -= pt, a.back += pt
            }
            if (_ >>>= gt, u -= gt, a.back += gt, a.length = wt, 0 === mt) {
                a.mode = lt;
                break
            }
            if (32 & mt) {
                a.back = -1, a.mode = X;
                break
            }
            if (64 & mt) {
                t.msg = "invalid literal/length code", a.mode = _t;
                break
            }
            a.extra = 15 & mt, a.mode = nt;
        case nt:
            if (a.extra) {
                for (Bt = a.extra; u < Bt;) {
                    if (0 === l) break t;
                    l--, _ += n[s++] << u, u += 8
                }
                a.length += _ & (1 << a.extra) - 1, _ >>>= a.extra, u -= a.extra, a.back += a.extra
            }
            a.was = a.length, a.mode = rt;
        case rt:
            for (; St = a.distcode[_ & (1 << a.distbits) - 1], gt = St >>> 24, mt = St >>> 16 & 255, wt = 65535 & St, !(gt <= u);) {
                if (0 === l) break t;
                l--, _ += n[s++] << u, u += 8
            }
            if (0 === (240 & mt)) {
                for (pt = gt, vt = mt, kt = wt; St = a.distcode[kt + ((_ & (1 << pt + vt) - 1) >> pt)], gt = St >>> 24, mt = St >>> 16 & 255, wt = 65535 & St, !(pt + gt <= u);) {
                    if (0 === l) break t;
                    l--, _ += n[s++] << u, u += 8
                }
                _ >>>= pt, u -= pt, a.back += pt
            }
            if (_ >>>= gt, u -= gt, a.back += gt, 64 & mt) {
                t.msg = "invalid distance code", a.mode = _t;
                break
            }
            a.offset = wt, a.extra = 15 & mt, a.mode = st;
        case st:
            if (a.extra) {
                for (Bt = a.extra; u < Bt;) {
                    if (0 === l) break t;
                    l--, _ += n[s++] << u, u += 8
                }
                a.offset += _ & (1 << a.extra) - 1, _ >>>= a.extra, u -= a.extra, a.back += a.extra
            }
            if (a.offset > a.dmax) {
                t.msg = "invalid distance too far back", a.mode = _t;
                break
            }
            a.mode = ot;
        case ot:
            if (0 === h) break t;
            if (g = b - h, a.offset > g) {
                if (g = a.offset - g, g > a.whave && a.sane) {
                    t.msg = "invalid distance too far back", a.mode = _t;
                    break
                }
                g > a.wnext ? (g -= a.wnext, m = a.wsize - g) : m = a.wnext - g, g > a.length && (g = a.length), bt = a.window
            } else bt = r, m = o - a.offset, g = a.length;
            g > h && (g = h), h -= g, a.length -= g;
            do r[o++] = bt[m++]; while (--g);
            0 === a.length && (a.mode = it);
            break;
        case lt:
            if (0 === h) break t;
            r[o++] = a.length, h--, a.mode = it;
            break;
        case ht:
            if (a.wrap) {
                for (; u < 32;) {
                    if (0 === l) break t;
                    l--, _ |= n[s++] << u, u += 8
                }
                if (b -= h, t.total_out += b, a.total += b, b && (t.adler = a.check = a.flags ? v(a.check, r, b, o - b) : p(a.check, r, b, o - b)), b = h, (a.flags ? _ : i(_)) !== a.check) {
                    t.msg = "incorrect data check", a.mode = _t;
                    break
                }
                _ = 0, u = 0
            }
            a.mode = dt;
        case dt:
            if (a.wrap && a.flags) {
                for (; u < 32;) {
                    if (0 === l) break t;
                    l--, _ += n[s++] << u, u += 8
                }
                if (_ !== (4294967295 & a.total)) {
                    t.msg = "incorrect length check", a.mode = _t;
                    break
                }
                _ = 0, u = 0
            }
            a.mode = ft;
        case ft:
            xt = R;
            break t;
        case _t:
            xt = O;
            break t;
        case ut:
            return D;
        case ct:
        default:
            return N
    }
    return t.next_out = o, t.avail_out = h, t.next_in = s, t.avail_in = l, a.hold = _, a.bits = u, (a.wsize || b !== t.avail_out && a.mode < _t && (a.mode < ht || e !== S)) && f(t, t.output, t.next_out, b - t.avail_out) ? (a.mode = ut, D) : (c -= t.avail_in, b -= t.avail_out, t.total_in += c, t.total_out += b, a.total += b, a.wrap && b && (t.adler = a.check = a.flags ? v(a.check, r, b, t.next_out - b) : p(a.check, r, b, t.next_out - b)), t.data_type = a.bits + (a.last ? 64 : 0) + (a.mode === X ? 128 : 0) + (a.mode === at || a.mode === Q ? 256 : 0), (0 === c && 0 === b || e === S) && xt === Z && (xt = I), xt)
}