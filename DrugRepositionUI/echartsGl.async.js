"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[460],{41198:function(Kl,$l,A){var _=A(17548),ki=A(17103),Ln=A(20739),X=A(88693),ht=A(30420),W=A(75142),G=A(60217),Be=A(84708),ji=A(80881),H=A(11476),ut=A(50908),An=A(86280),Ke=A(39789),me=A(14147),be=A(38077),ii=["mousedown","mouseup","mousemove","mouseover","mouseout","click","dblclick","contextmenu"];function ri(e){return"_on"+e}var ni=function(e){var t=this;this._texture=new W.Z({anisotropic:32,flipY:!1,surface:this,dispose:function(i){t.dispose(),W.Z.prototype.dispose.call(this,i)}}),ii.forEach(function(i){this[ri(i)]=function(r){r.triangle&&this._meshes.forEach(function(n){this.dispatchEvent(i,n,r.triangle,r.point)},this)}},this),this._meshes=[],e&&this.setECharts(e),this.onupdate=null};ni.prototype={constructor:ni,getTexture:function(){return this._texture},setECharts:function(e){this._chart=e;var t=e.getDom();if(!(t instanceof HTMLCanvasElement))console.error("ECharts must init on canvas if it is used as texture."),t=document.createElement("canvas");else{var i=this,r=e.getZr(),n=r.__oldRefreshImmediately||r.refreshImmediately;r.refreshImmediately=function(){n.call(this),i._texture.dirty(),i.onupdate&&i.onupdate()},r.__oldRefreshImmediately=n}this._texture.image=t,this._texture.dirty(),this.onupdate&&this.onupdate()},dispatchEvent:function(){var e=new me.Z,t=new me.Z,i=new me.Z,r=new be.Z,n=new be.Z,a=new be.Z,o=new be.Z,s=new me.Z;return function(l,h,u,f){var c=h.geometry,d=c.attributes.position,v=c.attributes.texcoord0,p=me.Z.dot,g=me.Z.cross;d.get(u[0],e.array),d.get(u[1],t.array),d.get(u[2],i.array),v.get(u[0],r.array),v.get(u[1],n.array),v.get(u[2],a.array),g(s,t,i);var x=p(e,s),y=p(f,s)/x;g(s,i,e);var T=p(f,s)/x;g(s,e,t);var w=p(f,s)/x;be.Z.scale(o,r,y),be.Z.scaleAndAdd(o,o,n,T),be.Z.scaleAndAdd(o,o,a,w);var S=o.x*this._chart.getWidth(),b=o.y*this._chart.getHeight();this._chart.getZr().handler.dispatch(l,{zrX:S,zrY:b})}}(),attachToMesh:function(e){this._meshes.indexOf(e)>=0||(ii.forEach(function(t){e.on(t,this[ri(t)],this)},this),this._meshes.push(e))},detachFromMesh:function(e){var t=this._meshes.indexOf(e);t>=0&&this._meshes.splice(t,1),ii.forEach(function(i){e.off(i,this[ri(i)])},this)},dispose:function(){this._meshes.forEach(function(e){this.detachFromMesh(e)},this)}};var Cn=ni,Pn=A(81157),Mn=A(43577),En=A(34052),Nn={firstNotNull:function(){for(var e=0,t=arguments.length;e<t;e++)if(arguments[e]!=null)return arguments[e]},queryDataIndex:function(e,t){if(t.dataIndexInside!=null)return t.dataIndexInside;if(t.dataIndex!=null)return _.D5.isArray(t.dataIndex)?_.D5.map(t.dataIndex,function(i){return e.indexOfRawIndex(i)}):e.indexOfRawIndex(t.dataIndex);if(t.name!=null)return _.D5.isArray(t.name)?_.D5.map(t.name,function(i){return e.indexOfName(i)}):e.indexOfName(t.name)}},B=Nn,On=A(88935),Xi=A(6132),In=A(99439),Rn=A(82085),zn=A(47555),Gn=A(21971),Fn=A(57766),Pt=A(18850),Mt=A(95347),Bn=A(60273),Zn=A(13075),Hn=A(22351),Vn=A(40004),Un=A(35692),ue=A(49865),Wn=A(87542),kn=A(76867),jn=A(37233),Xn=A(88908),Yn=A(70295),Qn={_animators:null,getAnimators:function(){return this._animators=this._animators||[],this._animators},animate:function(e,t){this._animators=this._animators||[];var i=this,r;if(e){for(var n=e.split("."),a=i,o=0,s=n.length;o<s;o++)a&&(a=a[n[o]]);a&&(r=a)}else r=i;if(r==null)throw new Error("Target "+e+" not exists");var l=this._animators,h=new Yn.Z(r,t),u=this;return h.during(function(){u.__zr&&u.__zr.refresh()}).done(function(){var f=l.indexOf(h);f>=0&&l.splice(f,1)}),l.push(h),this.__zr&&this.__zr.animation.addAnimator(h),h},stopAnimation:function(e){this._animators=this._animators||[];for(var t=this._animators,i=t.length,r=0;r<i;r++)t[r].stop(e);return t.length=0,this},addAnimatorsToZr:function(e){if(this._animators)for(var t=0;t<this._animators.length;t++)e.animation.addAnimator(this._animators[t])},removeAnimatorsFromZr:function(e){if(this._animators)for(var t=0;t<this._animators.length;t++)e.animation.removeAnimator(this._animators[t])}},Kn=Qn,Yi=A(73142),$n=A(19671),Jn=`
@export ecgl.common.transformUniforms
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 worldInverseTranspose : WORLDINVERSETRANSPOSE;
uniform mat4 world : WORLD;
@end

@export ecgl.common.attributes
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
attribute vec3 normal : NORMAL;
@end

@export ecgl.common.uv.header
uniform vec2 uvRepeat : [1.0, 1.0];
uniform vec2 uvOffset : [0.0, 0.0];
uniform vec2 detailUvRepeat : [1.0, 1.0];
uniform vec2 detailUvOffset : [0.0, 0.0];

varying vec2 v_Texcoord;
varying vec2 v_DetailTexcoord;
@end

@export ecgl.common.uv.main
v_Texcoord = texcoord * uvRepeat + uvOffset;
v_DetailTexcoord = texcoord * detailUvRepeat + detailUvOffset;
@end

@export ecgl.common.uv.fragmentHeader
varying vec2 v_Texcoord;
varying vec2 v_DetailTexcoord;
@end


@export ecgl.common.albedo.main

 vec4 albedoTexel = vec4(1.0);
#ifdef DIFFUSEMAP_ENABLED
 albedoTexel = texture2D(diffuseMap, v_Texcoord);
 #ifdef SRGB_DECODE
 albedoTexel = sRGBToLinear(albedoTexel);
 #endif
#endif

#ifdef DETAILMAP_ENABLED
 vec4 detailTexel = texture2D(detailMap, v_DetailTexcoord);
 #ifdef SRGB_DECODE
 detailTexel = sRGBToLinear(detailTexel);
 #endif
 albedoTexel.rgb = mix(albedoTexel.rgb, detailTexel.rgb, detailTexel.a);
 albedoTexel.a = detailTexel.a + (1.0 - detailTexel.a) * albedoTexel.a;
#endif

@end

@export ecgl.common.wireframe.vertexHeader

#ifdef WIREFRAME_QUAD
attribute vec4 barycentric;
varying vec4 v_Barycentric;
#elif defined(WIREFRAME_TRIANGLE)
attribute vec3 barycentric;
varying vec3 v_Barycentric;
#endif

@end

@export ecgl.common.wireframe.vertexMain

#if defined(WIREFRAME_QUAD) || defined(WIREFRAME_TRIANGLE)
 v_Barycentric = barycentric;
#endif

@end


@export ecgl.common.wireframe.fragmentHeader

uniform float wireframeLineWidth : 1;
uniform vec4 wireframeLineColor: [0, 0, 0, 0.5];

#ifdef WIREFRAME_QUAD
varying vec4 v_Barycentric;
float edgeFactor () {
 vec4 d = fwidth(v_Barycentric);
 vec4 a4 = smoothstep(vec4(0.0), d * wireframeLineWidth, v_Barycentric);
 return min(min(min(a4.x, a4.y), a4.z), a4.w);
}
#elif defined(WIREFRAME_TRIANGLE)
varying vec3 v_Barycentric;
float edgeFactor () {
 vec3 d = fwidth(v_Barycentric);
 vec3 a3 = smoothstep(vec3(0.0), d * wireframeLineWidth, v_Barycentric);
 return min(min(a3.x, a3.y), a3.z);
}
#endif

@end


@export ecgl.common.wireframe.fragmentMain

#if defined(WIREFRAME_QUAD) || defined(WIREFRAME_TRIANGLE)
 if (wireframeLineWidth > 0.) {
 vec4 lineColor = wireframeLineColor;
#ifdef SRGB_DECODE
 lineColor = sRGBToLinear(lineColor);
#endif

 gl_FragColor.rgb = mix(gl_FragColor.rgb, lineColor.rgb, (1.0 - edgeFactor()) * lineColor.a);
 }
#endif
@end




@export ecgl.common.bumpMap.header

#ifdef BUMPMAP_ENABLED
uniform sampler2D bumpMap;
uniform float bumpScale : 1.0;


vec3 bumpNormal(vec3 surfPos, vec3 surfNormal, vec3 baseNormal)
{
 vec2 dSTdx = dFdx(v_Texcoord);
 vec2 dSTdy = dFdy(v_Texcoord);

 float Hll = bumpScale * texture2D(bumpMap, v_Texcoord).x;
 float dHx = bumpScale * texture2D(bumpMap, v_Texcoord + dSTdx).x - Hll;
 float dHy = bumpScale * texture2D(bumpMap, v_Texcoord + dSTdy).x - Hll;

 vec3 vSigmaX = dFdx(surfPos);
 vec3 vSigmaY = dFdy(surfPos);
 vec3 vN = surfNormal;

 vec3 R1 = cross(vSigmaY, vN);
 vec3 R2 = cross(vN, vSigmaX);

 float fDet = dot(vSigmaX, R1);

 vec3 vGrad = sign(fDet) * (dHx * R1 + dHy * R2);
 return normalize(abs(fDet) * baseNormal - vGrad);

}
#endif

@end

@export ecgl.common.normalMap.vertexHeader

#ifdef NORMALMAP_ENABLED
attribute vec4 tangent : TANGENT;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@end

@export ecgl.common.normalMap.vertexMain

#ifdef NORMALMAP_ENABLED
 if (dot(tangent, tangent) > 0.0) {
 v_Tangent = normalize((worldInverseTranspose * vec4(tangent.xyz, 0.0)).xyz);
 v_Bitangent = normalize(cross(v_Normal, v_Tangent) * tangent.w);
 }
#endif

@end


@export ecgl.common.normalMap.fragmentHeader

#ifdef NORMALMAP_ENABLED
uniform sampler2D normalMap;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@end

@export ecgl.common.normalMap.fragmentMain
#ifdef NORMALMAP_ENABLED
 if (dot(v_Tangent, v_Tangent) > 0.0) {
 vec3 normalTexel = texture2D(normalMap, v_DetailTexcoord).xyz;
 if (dot(normalTexel, normalTexel) > 0.0) { N = normalTexel * 2.0 - 1.0;
 mat3 tbn = mat3(v_Tangent, v_Bitangent, v_Normal);
 N = normalize(tbn * N);
 }
 }
#endif
@end



@export ecgl.common.vertexAnimation.header

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute vec3 prevNormal;
uniform float percent;
#endif

@end

@export ecgl.common.vertexAnimation.main

#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
 vec3 norm = mix(prevNormal, normal, percent);
#else
 vec3 pos = position;
 vec3 norm = normal;
#endif

@end


@export ecgl.common.ssaoMap.header
#ifdef SSAOMAP_ENABLED
uniform sampler2D ssaoMap;
uniform vec4 viewport : VIEWPORT;
#endif
@end

@export ecgl.common.ssaoMap.main
 float ao = 1.0;
#ifdef SSAOMAP_ENABLED
 ao = texture2D(ssaoMap, (gl_FragCoord.xy - viewport.xy) / viewport.zw).r;
#endif
@end




@export ecgl.common.diffuseLayer.header

#if (LAYER_DIFFUSEMAP_COUNT > 0)
uniform float layerDiffuseIntensity[LAYER_DIFFUSEMAP_COUNT];
uniform sampler2D layerDiffuseMap[LAYER_DIFFUSEMAP_COUNT];
#endif

@end

@export ecgl.common.emissiveLayer.header

#if (LAYER_EMISSIVEMAP_COUNT > 0)
uniform float layerEmissionIntensity[LAYER_EMISSIVEMAP_COUNT];
uniform sampler2D layerEmissiveMap[LAYER_EMISSIVEMAP_COUNT];
#endif

@end

@export ecgl.common.layers.header
@import ecgl.common.diffuseLayer.header
@import ecgl.common.emissiveLayer.header
@end

@export ecgl.common.diffuseLayer.main

#if (LAYER_DIFFUSEMAP_COUNT > 0)
 for (int _idx_ = 0; _idx_ < LAYER_DIFFUSEMAP_COUNT; _idx_++) {{
 float intensity = layerDiffuseIntensity[_idx_];
 vec4 texel2 = texture2D(layerDiffuseMap[_idx_], v_Texcoord);
 #ifdef SRGB_DECODE
 texel2 = sRGBToLinear(texel2);
 #endif
 albedoTexel.rgb = mix(albedoTexel.rgb, texel2.rgb * intensity, texel2.a);
 albedoTexel.a = texel2.a + (1.0 - texel2.a) * albedoTexel.a;
 }}
#endif

@end

@export ecgl.common.emissiveLayer.main

#if (LAYER_EMISSIVEMAP_COUNT > 0)
 for (int _idx_ = 0; _idx_ < LAYER_EMISSIVEMAP_COUNT; _idx_++)
 {{
 vec4 texel2 = texture2D(layerEmissiveMap[_idx_], v_Texcoord) * layerEmissionIntensity[_idx_];
 #ifdef SRGB_DECODE
 texel2 = sRGBToLinear(texel2);
 #endif
 float intensity = layerEmissionIntensity[_idx_];
 gl_FragColor.rgb += texel2.rgb * texel2.a * intensity;
 }}
#endif

@end
`,qn=`@export ecgl.color.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

@import ecgl.common.uv.header

attribute vec2 texcoord : TEXCOORD_0;
attribute vec3 position: POSITION;

@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
uniform float percent : 1.0;
#endif

#ifdef ATMOSPHERE_ENABLED
attribute vec3 normal: NORMAL;
uniform mat4 worldInverseTranspose : WORLDINVERSETRANSPOSE;
varying vec3 v_Normal;
#endif

void main()
{
#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
#else
 vec3 pos = position;
#endif

 gl_Position = worldViewProjection * vec4(pos, 1.0);

 @import ecgl.common.uv.main

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

#ifdef ATMOSPHERE_ENABLED
 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);
#endif

 @import ecgl.common.wireframe.vertexMain

}

@end

@export ecgl.color.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0

uniform sampler2D diffuseMap;
uniform sampler2D detailMap;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
varying vec3 v_Normal;
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

@import ecgl.common.layers.header

@import ecgl.common.uv.fragmentHeader

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color);
#else
 gl_FragColor = color;
#endif

#ifdef VERTEX_COLOR
 gl_FragColor *= v_Color;
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 gl_FragColor *= albedoTexel;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain

}
@end`,ea=`/**
 * http: */

@export ecgl.lambert.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header


@import ecgl.common.attributes

@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif


@import ecgl.common.vertexAnimation.header


varying vec3 v_Normal;
varying vec3 v_WorldPosition;

void main()
{
 @import ecgl.common.uv.main

 @import ecgl.common.vertexAnimation.main


 gl_Position = worldViewProjection * vec4(pos, 1.0);

 v_Normal = normalize((worldInverseTranspose * vec4(norm, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

 @import ecgl.common.wireframe.vertexMain
}

@end


@export ecgl.lambert.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform sampler2D diffuseMap;
uniform sampler2D detailMap;

@import ecgl.common.layers.header

uniform float emissionIntensity: 1.0;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
#endif

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif


@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color);
#else
 gl_FragColor = color;
#endif

#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 gl_FragColor *= sRGBToLinear(v_Color);
 #else
 gl_FragColor *= v_Color;
 #endif
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 gl_FragColor *= albedoTexel;

 vec3 N = v_Normal;
#ifdef DOUBLE_SIDED
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 vec3 diffuseColor = vec3(0.0, 0.0, 0.0);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int i = 0; i < AMBIENT_LIGHT_COUNT; i++)
 {
 diffuseColor += ambientLightColor[i] * ambientFactor * ao;
 }
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 diffuseColor += calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_] * ao;
 }}
#endif
#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++)
 {
 vec3 lightDirection = -directionalLightDirection[i];
 vec3 lightColor = directionalLightColor[i];

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[i];
 }
#endif

 float ndl = dot(N, normalize(lightDirection)) * shadowContrib;

 diffuseColor += lightColor * clamp(ndl, 0.0, 1.0);
 }
#endif

 gl_FragColor.rgb *= diffuseColor;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain
}

@end`,ta=`@export ecgl.realistic.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes


@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

#ifdef NORMALMAP_ENABLED
attribute vec4 tangent : TANGENT;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@import ecgl.common.vertexAnimation.header

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

void main()
{

 @import ecgl.common.uv.main

 @import ecgl.common.vertexAnimation.main

 gl_Position = worldViewProjection * vec4(pos, 1.0);

 v_Normal = normalize((worldInverseTranspose * vec4(norm, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

#ifdef NORMALMAP_ENABLED
 v_Tangent = normalize((worldInverseTranspose * vec4(tangent.xyz, 0.0)).xyz);
 v_Bitangent = normalize(cross(v_Normal, v_Tangent) * tangent.w);
#endif

 @import ecgl.common.wireframe.vertexMain

}

@end



@export ecgl.realistic.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0
#define PI 3.14159265358979
#define ROUGHNESS_CHANEL 0
#define METALNESS_CHANEL 1

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform sampler2D diffuseMap;

uniform sampler2D detailMap;
uniform sampler2D metalnessMap;
uniform sampler2D roughnessMap;

@import ecgl.common.layers.header

uniform float emissionIntensity: 1.0;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

uniform float metalness : 0.0;
uniform float roughness : 0.5;

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
#endif

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif

#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef AMBIENT_CUBEMAP_LIGHT_COUNT
@import clay.header.ambient_cubemap_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

@import ecgl.common.normalMap.fragmentHeader

@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import clay.util.rgbm

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

vec3 F_Schlick(float ndv, vec3 spec) {
 return spec + (1.0 - spec) * pow(1.0 - ndv, 5.0);
}

float D_Phong(float g, float ndh) {
 float a = pow(8192.0, g);
 return (a + 2.0) / 8.0 * pow(ndh, a);
}

void main()
{
 vec4 albedoColor = color;

 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);
#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 albedoColor *= sRGBToLinear(v_Color);
 #else
 albedoColor *= v_Color;
 #endif
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 albedoColor *= albedoTexel;

 float m = metalness;

#ifdef METALNESSMAP_ENABLED
 float m2 = texture2D(metalnessMap, v_DetailTexcoord)[METALNESS_CHANEL];
 m = clamp(m2 + (m - 0.5) * 2.0, 0.0, 1.0);
#endif

 vec3 baseColor = albedoColor.rgb;
 albedoColor.rgb = baseColor * (1.0 - m);
 vec3 specFactor = mix(vec3(0.04), baseColor, m);

 float g = 1.0 - roughness;

#ifdef ROUGHNESSMAP_ENABLED
 float g2 = 1.0 - texture2D(roughnessMap, v_DetailTexcoord)[ROUGHNESS_CHANEL];
 g = clamp(g2 + (g - 0.5) * 2.0, 0.0, 1.0);
#endif

 vec3 N = v_Normal;

#ifdef DOUBLE_SIDED
 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

@import ecgl.common.normalMap.fragmentMain

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 vec3 diffuseTerm = vec3(0.0);
 vec3 specularTerm = vec3(0.0);

 float ndv = clamp(dot(N, V), 0.0, 1.0);
 vec3 fresnelTerm = F_Schlick(ndv, specFactor);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_LIGHT_COUNT; _idx_++)
 {{
 diffuseTerm += ambientLightColor[_idx_] * ambientFactor * ao;
 }}
#endif

#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 diffuseTerm += calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_] * ao;
 }}
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int _idx_ = 0; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++)
 {{
 vec3 L = -directionalLightDirection[_idx_];
 vec3 lc = directionalLightColor[_idx_];

 vec3 H = normalize(L + V);
 float ndl = clamp(dot(N, normalize(L)), 0.0, 1.0);
 float ndh = clamp(dot(N, H), 0.0, 1.0);

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[_idx_];
 }
#endif

 vec3 li = lc * ndl * shadowContrib;

 diffuseTerm += li;
 specularTerm += li * fresnelTerm * D_Phong(g, ndh);
 }}
#endif


#ifdef AMBIENT_CUBEMAP_LIGHT_COUNT
 vec3 L = reflect(-V, N);
 L = vec3(L.x, L[NORMAL_UP_AXIS], L[NORMAL_FRONT_AXIS]);
 float rough2 = clamp(1.0 - g, 0.0, 1.0);
 float bias2 = rough2 * 5.0;
 vec2 brdfParam2 = texture2D(ambientCubemapLightBRDFLookup[0], vec2(rough2, ndv)).xy;
 vec3 envWeight2 = specFactor * brdfParam2.x + brdfParam2.y;
 vec3 envTexel2;
 for(int _idx_ = 0; _idx_ < AMBIENT_CUBEMAP_LIGHT_COUNT; _idx_++)
 {{
 envTexel2 = RGBMDecode(textureCubeLodEXT(ambientCubemapLightCubemap[_idx_], L, bias2), 8.12);
 specularTerm += ambientCubemapLightColor[_idx_] * envTexel2 * envWeight2 * ao;
 }}
#endif

 gl_FragColor.rgb = albedoColor.rgb * diffuseTerm + specularTerm;
 gl_FragColor.a = albedoColor.a;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

#ifdef SRGB_ENCODE
 gl_FragColor = linearTosRGB(gl_FragColor);
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain
}

@end`,ia=`@export ecgl.hatching.vertex

@import ecgl.realistic.vertex

@end


@export ecgl.hatching.fragment

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform vec4 color : [0.0, 0.0, 0.0, 1.0];
uniform vec4 paperColor : [1.0, 1.0, 1.0, 1.0];

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif


@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

uniform sampler2D hatch1;
uniform sampler2D hatch2;
uniform sampler2D hatch3;
uniform sampler2D hatch4;
uniform sampler2D hatch5;
uniform sampler2D hatch6;

float shade(in float tone) {
 vec4 c = vec4(1. ,1., 1., 1.);
 float step = 1. / 6.;
 vec2 uv = v_DetailTexcoord;
 if (tone <= step / 2.0) {
 c = mix(vec4(0.), texture2D(hatch6, uv), 12. * tone);
 }
 else if (tone <= step) {
 c = mix(texture2D(hatch6, uv), texture2D(hatch5, uv), 6. * tone);
 }
 if(tone > step && tone <= 2. * step){
 c = mix(texture2D(hatch5, uv), texture2D(hatch4, uv) , 6. * (tone - step));
 }
 if(tone > 2. * step && tone <= 3. * step){
 c = mix(texture2D(hatch4, uv), texture2D(hatch3, uv), 6. * (tone - 2. * step));
 }
 if(tone > 3. * step && tone <= 4. * step){
 c = mix(texture2D(hatch3, uv), texture2D(hatch2, uv), 6. * (tone - 3. * step));
 }
 if(tone > 4. * step && tone <= 5. * step){
 c = mix(texture2D(hatch2, uv), texture2D(hatch1, uv), 6. * (tone - 4. * step));
 }
 if(tone > 5. * step){
 c = mix(texture2D(hatch1, uv), vec4(1.), 6. * (tone - 5. * step));
 }

 return c.r;
}

const vec3 w = vec3(0.2125, 0.7154, 0.0721);

void main()
{
#ifdef SRGB_DECODE
 vec4 inkColor = sRGBToLinear(color);
#else
 vec4 inkColor = color;
#endif

#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 inkColor *= sRGBToLinear(v_Color);
 #else
 inkColor *= v_Color;
 #endif
#endif

 vec3 N = v_Normal;
#ifdef DOUBLE_SIDED
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float tone = 0.0;

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int i = 0; i < AMBIENT_LIGHT_COUNT; i++)
 {
 tone += dot(ambientLightColor[i], w) * ambientFactor * ao;
 }
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 tone += dot(calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_], w) * ao;
 }}
#endif
#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++)
 {
 vec3 lightDirection = -directionalLightDirection[i];
 float lightTone = dot(directionalLightColor[i], w);

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[i];
 }
#endif

 float ndl = dot(N, normalize(lightDirection)) * shadowContrib;

 tone += lightTone * clamp(ndl, 0.0, 1.0);
 }
#endif

 gl_FragColor = mix(inkColor, paperColor, shade(clamp(tone, 0.0, 1.0)));
 }
@end
`,ra=`@export ecgl.sm.depth.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
uniform float percent : 1.0;
#endif

varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;

void main(){

#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
#else
 vec3 pos = position;
#endif

 v_ViewPosition = worldViewProjection * vec4(pos, 1.0);
 gl_Position = v_ViewPosition;

 v_Texcoord = texcoord;

}
@end



@export ecgl.sm.depth.fragment

@import clay.sm.depth.fragment

@end`;Object.assign(ji.Z.prototype,Kn),G.Z.import(Yi.Z),G.Z.import($n.Z),G.Z.import(Jn),G.Z.import(qn),G.Z.import(ea),G.Z.import(ta),G.Z.import(ia),G.Z.import(ra);function na(e){return!e||e==="none"}function Qi(e){return e instanceof HTMLCanvasElement||e instanceof HTMLImageElement||e instanceof Image}function aa(e){return e.getZr&&e.setOption}var oa=ut.Z.prototype.addToScene,sa=ut.Z.prototype.removeFromScene;ut.Z.prototype.addToScene=function(e){if(oa.call(this,e),this.__zr){var t=this.__zr;e.traverse(function(i){i.__zr=t,i.addAnimatorsToZr&&i.addAnimatorsToZr(t)})}},ut.Z.prototype.removeFromScene=function(e){sa.call(this,e),e.traverse(function(t){var i=t.__zr;t.__zr=null,i&&t.removeAnimatorsFromZr&&t.removeAnimatorsFromZr(i)})},Be.Z.prototype.setTextureImage=function(e,t,i,r){if(this.shader){var n=i.getZr(),a=this,o;return a.autoUpdateTextureStatus=!1,a.disableTexture(e),na(t)||(o=R.loadTexture(t,i,r,function(s){a.enableTexture(e),n&&n.refresh()}),a.set(e,o)),o}};var R={};R.Renderer=ki.Z,R.Node=ji.Z,R.Mesh=ht.Z,R.Shader=G.Z,R.Material=Be.Z,R.Texture=X.Z,R.Texture2D=W.Z,R.Geometry=H.Z,R.SphereGeometry=On.Z,R.PlaneGeometry=Xi.Z,R.CubeGeometry=In.Z,R.AmbientLight=Rn.Z,R.DirectionalLight=zn.Z,R.PointLight=Gn.Z,R.SpotLight=Fn.Z,R.PerspectiveCamera=Pt.Z,R.OrthographicCamera=Mt.Z,R.Vector2=be.Z,R.Vector3=me.Z,R.Vector4=Bn.Z,R.Quaternion=Zn.Z,R.Matrix2=Hn.Z,R.Matrix2d=Vn.Z,R.Matrix3=Un.Z,R.Matrix4=ue.Z,R.Plane=Wn.Z,R.Ray=kn.Z,R.BoundingBox=jn.Z,R.Frustum=Xn.Z;var Et=null;function la(){return Et!==null||(Et=Ke.Z.createBlank("rgba(255,255,255,0)").image),Et}function Ki(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))}function $i(e){if((e.wrapS===X.Z.REPEAT||e.wrapT===X.Z.REPEAT)&&e.image){var t=Ki(e.width),i=Ki(e.height);if(t!==e.width||i!==e.height){var r=document.createElement("canvas");r.width=t,r.height=i;var n=r.getContext("2d");n.drawImage(e.image,0,0,t,i),e.image=r}}}R.loadTexture=function(e,t,i,r){typeof i=="function"&&(r=i,i={}),i=i||{};for(var n=Object.keys(i).sort(),a="",o=0;o<n.length;o++)a+=n[o]+"_"+i[n[o]]+"_";var s=t.__textureCache=t.__textureCache||new An.ZP(20);if(aa(e)){var l=e.__textureid__,h=s.get(a+l);if(h)h.texture.surface.setECharts(e),r&&r(h.texture);else{var u=new Cn(e);u.onupdate=function(){t.getZr().refresh()},h={texture:u.getTexture()};for(var o=0;o<n.length;o++)h.texture[n[o]]=i[n[o]];l=e.__textureid__||"__ecgl_ec__"+h.texture.__uid__,e.__textureid__=l,s.put(a+l,h),r&&r(h.texture)}return h.texture}else if(Qi(e)){var l=e.__textureid__,h=s.get(a+l);if(!h){h={texture:new R.Texture2D({image:e})};for(var o=0;o<n.length;o++)h.texture[n[o]]=i[n[o]];l=e.__textureid__||"__ecgl_image__"+h.texture.__uid__,e.__textureid__=l,s.put(a+l,h),$i(h.texture),r&&r(h.texture)}return h.texture}else{var h=s.get(a+e);if(h)h.callbacks?h.callbacks.push(r):r&&r(h.texture);else if(e.match(/.hdr$|^data:application\/octet-stream/)){h={callbacks:[r]};var f=Ke.Z.loadTexture(e,{exposure:i.exposure,fileType:"hdr"},function(){f.dirty(),h.callbacks.forEach(function(v){v&&v(f)}),h.callbacks=null});h.texture=f,s.put(a+e,h)}else{for(var f=new R.Texture2D({image:new Image}),o=0;o<n.length;o++)f[n[o]]=i[n[o]];h={texture:f,callbacks:[r]};var c=f.image;c.onload=function(){f.image=c,$i(f),f.dirty(),h.callbacks.forEach(function(p){p&&p(f)}),h.callbacks=null},c.crossOrigin="Anonymous",c.src=e,f.image=la(),s.put(a+e,h)}return h.texture}},R.createAmbientCubemap=function(e,t,i,r){e=e||{};var n=e.texture,a=B.firstNotNull(e.exposure,1),o=new Pn.Z({intensity:B.firstNotNull(e.specularIntensity,1)}),s=new Mn.Z({intensity:B.firstNotNull(e.diffuseIntensity,1),coefficients:[.844,.712,.691,-.037,.083,.167,.343,.288,.299,-.041,-.021,-.009,-.003,-.041,-.064,-.011,-.007,-.004,-.031,.034,.081,-.06,-.049,-.06,.046,.056,.05]});return o.cubemap=R.loadTexture(n,i,{exposure:a},function(){if(o.cubemap.flipY=!1,!1)var l;if(o.prefilter(t,32),!1)var h;s.coefficients=En.Z.projectEnvironmentMap(t,o.cubemap,{lod:1}),r&&r()}),{specular:o,diffuse:s}},R.createBlankTexture=Ke.Z.createBlank,R.isImage=Qi,R.additiveBlend=function(e){e.blendEquation(e.FUNC_ADD),e.blendFunc(e.SRC_ALPHA,e.ONE)},R.parseColor=function(e,t){return e instanceof Array?(t||(t=[]),t[0]=e[0],t[1]=e[1],t[2]=e[2],e.length>3?t[3]=e[3]:t[3]=1,t):(t=_.$_.parse(e||"#000",t)||[0,0,0,0],t[0]/=255,t[1]/=255,t[2]/=255,t)},R.directionFromAlphaBeta=function(e,t){var i=e/180*Math.PI+Math.PI/2,r=-t/180*Math.PI+Math.PI/2,n=[],a=Math.sin(i);return n[0]=a*Math.cos(r),n[1]=-Math.cos(i),n[2]=a*Math.sin(r),n},R.getShadowResolution=function(e){var t=1024;switch(e){case"low":t=512;break;case"medium":break;case"high":t=2048;break;case"ultra":t=4096;break}return t},R.COMMON_SHADERS=["lambert","color","realistic","hatching","shadow"],R.createShader=function(e){e==="ecgl.shadow"&&(e="ecgl.displayShadow");var t=G.Z.source(e+".vertex"),i=G.Z.source(e+".fragment");t||console.error("Vertex shader of '%s' not exits",e),i||console.error("Fragment shader of '%s' not exits",e);var r=new G.Z(t,i);return r.name=e,r},R.createMaterial=function(e,t){t instanceof Array||(t=[t]);var i=R.createShader(e),r=new Be.Z({shader:i});return t.forEach(function(n){typeof n=="string"&&r.define(n)}),r},R.setMaterialFromModel=function(e,t,i,r){t.autoUpdateTextureStatus=!1;var n=i.getModel(e+"Material"),a=n.get("detailTexture"),o=B.firstNotNull(n.get("textureTiling"),1),s=B.firstNotNull(n.get("textureOffset"),0);typeof o=="number"&&(o=[o,o]),typeof s=="number"&&(s=[s,s]);var l=o[0]>1||o[1]>1?R.Texture.REPEAT:R.Texture.CLAMP_TO_EDGE,h={anisotropic:8,wrapS:l,wrapT:l};if(e==="realistic"){var u=n.get("roughness"),f=n.get("metalness");f!=null?isNaN(f)&&(t.setTextureImage("metalnessMap",f,r,h),f=B.firstNotNull(n.get("metalnessAdjust"),.5)):f=0,u!=null?isNaN(u)&&(t.setTextureImage("roughnessMap",u,r,h),u=B.firstNotNull(n.get("roughnessAdjust"),.5)):u=.5;var c=n.get("normalTexture");t.setTextureImage("detailMap",a,r,h),t.setTextureImage("normalMap",c,r,h),t.set({roughness:u,metalness:f,detailUvRepeat:o,detailUvOffset:s})}else if(e==="lambert")t.setTextureImage("detailMap",a,r,h),t.set({detailUvRepeat:o,detailUvOffset:s});else if(e==="color")t.setTextureImage("detailMap",a,r,h),t.set({detailUvRepeat:o,detailUvOffset:s});else if(e==="hatching"){var d=n.get("hatchingTextures")||[];d.length<6;for(var v=0;v<6;v++)t.setTextureImage("hatch"+(v+1),d[v],r,{anisotropic:8,wrapS:R.Texture.REPEAT,wrapT:R.Texture.REPEAT});t.set({detailUvRepeat:o,detailUvOffset:s})}},R.updateVertexAnimation=function(e,t,i,r){var n=r.get("animation"),a=r.get("animationDurationUpdate"),o=r.get("animationEasingUpdate"),s=i.shadowDepthMaterial;if(n&&t&&a>0&&t.geometry.vertexCount===i.geometry.vertexCount){i.material.define("vertex","VERTEX_ANIMATION"),i.ignorePreZ=!0,s&&s.define("vertex","VERTEX_ANIMATION");for(var l=0;l<e.length;l++)i.geometry.attributes[e[l][0]].value=t.geometry.attributes[e[l][1]].value;i.geometry.dirty(),i.__percent=0,i.material.set("percent",0),i.stopAnimation(),i.animate().when(a,{__percent:1}).during(function(){i.material.set("percent",i.__percent),s&&s.set("percent",i.__percent)}).done(function(){i.ignorePreZ=!1,i.material.undefine("vertex","VERTEX_ANIMATION"),s&&s.undefine("vertex","VERTEX_ANIMATION")}).start(o)}else i.material.undefine("vertex","VERTEX_ANIMATION"),s&&s.undefine("vertex","VERTEX_ANIMATION")};var m=R,Ji=A(18167),ai=A(75820),j=function(e,t){this.id=e,this.zr=t;try{this.renderer=new ki.Z({clearBit:0,devicePixelRatio:t.painter.dpr,preserveDrawingBuffer:!0,premultipliedAlpha:!0}),this.renderer.resize(t.painter.getWidth(),t.painter.getHeight())}catch(r){this.renderer=null,this.dom=document.createElement("div"),this.dom.style.cssText="position:absolute; left: 0; top: 0; right: 0; bottom: 0;",this.dom.className="ecgl-nowebgl",this.dom.innerHTML="Sorry, your browser does not support WebGL",console.error(r);return}this.onglobalout=this.onglobalout.bind(this),t.on("globalout",this.onglobalout),this.dom=this.renderer.canvas;var i=this.dom.style;i.position="absolute",i.left="0",i.top="0",this.views=[],this._picking=new Ln.Z({renderer:this.renderer}),this._viewsToDispose=[],this._accumulatingId=0,this._zrEventProxy=new _.Q.UL({shape:{x:-1,y:-1,width:2,height:2},__isGLToZRProxy:!0}),this._backgroundColor=null,this._disposed=!1};j.prototype.setUnpainted=function(){},j.prototype.addView=function(e){if(e.layer!==this){var t=this._viewsToDispose.indexOf(e);t>=0&&this._viewsToDispose.splice(t,1),this.views.push(e),e.layer=this;var i=this.zr;e.scene.traverse(function(r){r.__zr=i,r.addAnimatorsToZr&&r.addAnimatorsToZr(i)})}};function qi(e){var t=e.__zr;e.__zr=null,t&&e.removeAnimatorsFromZr&&e.removeAnimatorsFromZr(t)}j.prototype.removeView=function(e){if(e.layer===this){var t=this.views.indexOf(e);t>=0&&(this.views.splice(t,1),e.scene.traverse(qi,this),e.layer=null,this._viewsToDispose.push(e))}},j.prototype.removeViewsAll=function(){this.views.forEach(function(e){e.scene.traverse(qi,this),e.layer=null,this._viewsToDispose.push(e)},this),this.views.length=0},j.prototype.resize=function(e,t){var i=this.renderer;i.resize(e,t)},j.prototype.clear=function(){var e=this.renderer.gl,t=this._backgroundColor||[0,0,0,0];e.clearColor(t[0],t[1],t[2],t[3]),e.depthMask(!0),e.colorMask(!0,!0,!0,!0),e.clear(e.DEPTH_BUFFER_BIT|e.COLOR_BUFFER_BIT)},j.prototype.clearDepth=function(){var e=this.renderer.gl;e.clear(e.DEPTH_BUFFER_BIT)},j.prototype.clearColor=function(){var e=this.renderer.gl;e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT)},j.prototype.needsRefresh=function(){this.zr.refresh()},j.prototype.refresh=function(e){this._backgroundColor=e?m.parseColor(e):[0,0,0,0],this.renderer.clearColor=this._backgroundColor;for(var t=0;t<this.views.length;t++)this.views[t].prepareRender(this.renderer);this._doRender(!1),this._trackAndClean();for(var t=0;t<this._viewsToDispose.length;t++)this._viewsToDispose[t].dispose(this.renderer);this._viewsToDispose.length=0,this._startAccumulating()},j.prototype.renderToCanvas=function(e){this._startAccumulating(!0),e.drawImage(this.dom,0,0,e.canvas.width,e.canvas.height)},j.prototype._doRender=function(e){this.clear(),this.renderer.saveViewport();for(var t=0;t<this.views.length;t++)this.views[t].render(this.renderer,e);this.renderer.restoreViewport()},j.prototype._stopAccumulating=function(){this._accumulatingId=0,clearTimeout(this._accumulatingTimeout)};var ha=1;j.prototype._startAccumulating=function(e){var t=this;this._stopAccumulating();for(var i=!1,r=0;r<this.views.length;r++)i=this.views[r].needsAccumulate()||i;if(!i)return;function n(a){if(!(!t._accumulatingId||a!==t._accumulatingId)){for(var o=!0,s=0;s<t.views.length;s++)o=t.views[s].isAccumulateFinished()&&i;o||(t._doRender(!0),e?n(a):(0,ai.Z)(function(){n(a)}))}}this._accumulatingId=ha++,e?n(t._accumulatingId):this._accumulatingTimeout=setTimeout(function(){n(t._accumulatingId)},50)},j.prototype._trackAndClean=function(){var e=[],t=[];this._textureList&&(Nt(this._textureList),Nt(this._geometriesList));for(var i=0;i<this.views.length;i++)ua(this.views[i].scene,e,t);this._textureList&&(Ot(this.renderer,this._textureList),Ot(this.renderer,this._geometriesList)),this._textureList=e,this._geometriesList=t};function Nt(e){for(var t=0;t<e.length;t++)e[t].__used__=0}function Ot(e,t){for(var i=0;i<t.length;i++)t[i].__used__||t[i].dispose(e)}function It(e,t){e.__used__=e.__used__||0,e.__used__++,e.__used__===1&&t.push(e)}function ua(e,t,i){var r,n;e.traverse(function(o){if(o.isRenderable()){var s=o.geometry,l=o.material;if(l!==r)for(var h=l.getTextureUniforms(),u=0;u<h.length;u++){var f=h[u],c=l.uniforms[f].value;if(c){if(c instanceof X.Z)It(c,t);else if(c instanceof Array)for(var d=0;d<c.length;d++)c[d]instanceof X.Z&&It(c[d],t)}}s!==n&&It(s,i),r=l,n=s}});for(var a=0;a<e.lights.length;a++)e.lights[a].cubemap&&It(e.lights[a].cubemap,t)}j.prototype.dispose=function(){this._disposed||(this._stopAccumulating(),this._textureList&&(Nt(this._textureList),Nt(this._geometriesList),Ot(this.renderer,this._textureList),Ot(this.renderer,this._geometriesList)),this.zr.off("globalout",this.onglobalout),this._disposed=!0)},j.prototype.onmousedown=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY);t&&(this._dispatchEvent("mousedown",e,t),this._dispatchDataEvent("mousedown",e,t)),this._downX=e.offsetX,this._downY=e.offsetY}},j.prototype.onmousemove=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY),i=t&&t.target,r=this._hovered;this._hovered=t,r&&i!==r.target&&(r.relatedTarget=i,this._dispatchEvent("mouseout",e,r),this.zr.setCursorStyle("default")),this._dispatchEvent("mousemove",e,t),t&&(this.zr.setCursorStyle("pointer"),(!r||i!==r.target)&&this._dispatchEvent("mouseover",e,t)),this._dispatchDataEvent("mousemove",e,t)}},j.prototype.onmouseup=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY);t&&(this._dispatchEvent("mouseup",e,t),this._dispatchDataEvent("mouseup",e,t)),this._upX=e.offsetX,this._upY=e.offsetY}},j.prototype.onclick=j.prototype.dblclick=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){var t=this._upX-this._downX,i=this._upY-this._downY;if(!(Math.sqrt(t*t+i*i)>20)){e=e.event;var r=this.pickObject(e.offsetX,e.offsetY);r&&(this._dispatchEvent(e.type,e,r),this._dispatchDataEvent(e.type,e,r));var n=this._clickToSetFocusPoint(e);if(n){var a=n.view.setDOFFocusOnPoint(n.distance);a&&this.zr.refresh()}}}},j.prototype._clickToSetFocusPoint=function(e){for(var t=this.renderer,i=t.viewport,r=this.views.length-1;r>=0;r--){var n=this.views[r];if(n.hasDOF()&&n.containPoint(e.offsetX,e.offsetY)){this._picking.scene=n.scene,this._picking.camera=n.camera,t.viewport=n.viewport;var a=this._picking.pick(e.offsetX,e.offsetY,!0);if(a)return a.view=n,a}}t.viewport=i},j.prototype.onglobalout=function(e){var t=this._hovered;t&&this._dispatchEvent("mouseout",e,{target:t.target})},j.prototype.pickObject=function(e,t){for(var i=[],r=this.renderer,n=r.viewport,a=0;a<this.views.length;a++){var o=this.views[a];o.containPoint(e,t)&&(this._picking.scene=o.scene,this._picking.camera=o.camera,r.viewport=o.viewport,this._picking.pickAll(e,t,i))}return r.viewport=n,i.sort(function(s,l){return s.distance-l.distance}),i[0]},j.prototype._dispatchEvent=function(e,t,i){i||(i={});var r=i.target;for(i.cancelBubble=!1,i.event=t,i.type=e,i.offsetX=t.offsetX,i.offsetY=t.offsetY;r&&(r.trigger(e,i),r=r.getParent(),!i.cancelBubble););this._dispatchToView(e,i)},j.prototype._dispatchDataEvent=function(e,t,i){var r=i&&i.target,n=r&&r.dataIndex,a=r&&r.seriesIndex,o=r&&r.eventData,s=!1,l=this._zrEventProxy;l.x=t.offsetX,l.y=t.offsetY,l.update();var h={target:l};const u=_._y.getECData(l);e==="mousemove"&&(n!=null?n!==this._lastDataIndex&&(parseInt(this._lastDataIndex,10)>=0&&(u.dataIndex=this._lastDataIndex,u.seriesIndex=this._lastSeriesIndex,this.zr.handler.dispatchToElement(h,"mouseout",t)),s=!0):o!=null&&o!==this._lastEventData&&(this._lastEventData!=null&&(u.eventData=this._lastEventData,this.zr.handler.dispatchToElement(h,"mouseout",t)),s=!0),this._lastEventData=o,this._lastDataIndex=n,this._lastSeriesIndex=a),u.eventData=o,u.dataIndex=n,u.seriesIndex=a,(o!=null||parseInt(n,10)>=0&&parseInt(a,10)>=0)&&(this.zr.handler.dispatchToElement(h,e,t),s&&this.zr.handler.dispatchToElement(h,"mouseover",t))},j.prototype._dispatchToView=function(e,t){for(var i=0;i<this.views.length;i++)this.views[i].containPoint(t.offsetX,t.offsetY)&&this.views[i].trigger(e,t)},Object.assign(j.prototype,Ji.Z);var er=j,fa=["bar3D","line3D","map3D","scatter3D","surface","lines3D","scatterGL","scatter3D"];function ft(e,t){if(e&&e[t]&&(e[t].normal||e[t].emphasis)){var i=e[t].normal,r=e[t].emphasis;i&&(e[t]=i),r&&(e.emphasis=e.emphasis||{},e.emphasis[t]=r)}}function ca(e){ft(e,"itemStyle"),ft(e,"lineStyle"),ft(e,"areaStyle"),ft(e,"label")}function Rt(e){e&&(e instanceof Array||(e=[e]),_.D5.each(e,function(t){if(t.axisLabel){var i=t.axisLabel;Object.assign(i,i.textStyle),i.textStyle=null}}))}function da(e){_.D5.each(e.series,function(t){_.D5.indexOf(fa,t.type)>=0&&(ca(t),t.coordinateSystem==="mapbox"&&(t.coordinateSystem="mapbox3D",e.mapbox3D=e.mapbox))}),Rt(e.xAxis3D),Rt(e.yAxis3D),Rt(e.zAxis3D),Rt(e.grid3D),ft(e.geo3D)}function tr(e){this._layers={},this._zr=e}tr.prototype.update=function(e,t){var i=this,r=t.getZr();if(!r.getWidth()||!r.getHeight()){console.warn("Dom has no width or height");return}function n(s){r.setSleepAfterStill(0);var l;s.coordinateSystem&&s.coordinateSystem.model,l=s.get("zlevel");var h=i._layers,u=h[l];if(!u){if(u=h[l]=new er("gl-"+l,r),r.painter.isSingleCanvas()){u.virtual=!0;var f=new _.Q.Ee({z:1e4,style:{image:u.renderer.canvas},silent:!0});u.__hostImage=f,r.add(f)}r.painter.insertLayer(l,u)}return u.__hostImage&&u.__hostImage.setStyle({width:u.renderer.getWidth(),height:u.renderer.getHeight()}),u}function a(s,l){s&&s.traverse(function(h){h.isRenderable&&h.isRenderable()&&(h.ignorePicking=h.$ignorePicking!=null?h.$ignorePicking:l)})}for(var o in this._layers)this._layers[o].removeViewsAll();e.eachComponent(function(s,l){if(s!=="series"){var h=t.getViewOfComponentModel(l),u=l.coordinateSystem;if(h.__ecgl__){var f;if(u){if(!u.viewGL){console.error("Can't find viewGL in coordinateSystem of component "+l.id);return}f=u.viewGL}else{if(!l.viewGL){console.error("Can't find viewGL of component "+l.id);return}f=u.viewGL}var f=u.viewGL,c=n(l);c.addView(f),h.afterRender&&h.afterRender(l,e,t,c),a(h.groupGL,l.get("silent"))}}}),e.eachSeries(function(s){var l=t.getViewOfSeriesModel(s),h=s.coordinateSystem;if(l.__ecgl__){if(h&&!h.viewGL&&!l.viewGL){console.error("Can't find viewGL of series "+l.id);return}var u=h&&h.viewGL||l.viewGL,f=n(s);f.addView(u),l.afterRender&&l.afterRender(s,e,t,f),a(l.groupGL,s.get("silent"))}})},_.sq(function(e){var t=e.getZr(),i=t.painter.dispose;t.painter.dispose=function(){typeof this.eachOtherLayer=="function"&&this.eachOtherLayer(function(r){r instanceof er&&r.dispose()}),i.call(this)},t.painter.getRenderedCanvas=function(r){if(r=r||{},this._singleCanvas)return this._layers[0].dom;var n=document.createElement("canvas"),a=r.pixelRatio||this.dpr;n.width=this.getWidth()*a,n.height=this.getHeight()*a;var o=n.getContext("2d");o.dpr=a,o.clearRect(0,0,n.width,n.height),r.backgroundColor&&(o.fillStyle=r.backgroundColor,o.fillRect(0,0,n.width,n.height));var s=this.storage.getDisplayList(!0),l={},h,u=this;function f(p,g){var x=u._zlevelList;p==null&&(p=-1/0);for(var y,T=0;T<x.length;T++){var w=x[T],S=u._layers[w];if(!S.__builtin__&&w>p&&w<g){y=S;break}}y&&y.renderToCanvas&&(o.save(),y.renderToCanvas(o),o.restore())}for(var c={ctx:o},d=0;d<s.length;d++){var v=s[d];v.zlevel!==h&&(f(h,v.zlevel),h=v.zlevel),this._doPaintEl(v,c,!0,null,l)}return f(h,1/0),n}}),_.Br(function(e,t){var i=t.getZr(),r=i.__egl=i.__egl||new tr(i);r.update(e,t)}),_.ds(da);var Jl=null,zt={defaultOption:{viewControl:{projection:"perspective",autoRotate:!1,autoRotateDirection:"cw",autoRotateSpeed:10,autoRotateAfterStill:3,damping:.8,rotateSensitivity:1,zoomSensitivity:1,panSensitivity:1,panMouseButton:"middle",rotateMouseButton:"left",distance:150,minDistance:40,maxDistance:400,orthographicSize:150,maxOrthographicSize:400,minOrthographicSize:20,center:[0,0,0],alpha:0,beta:0,minAlpha:-90,maxAlpha:90}},setView:function(e){e=e||{},this.option.viewControl=this.option.viewControl||{},e.alpha!=null&&(this.option.viewControl.alpha=e.alpha),e.beta!=null&&(this.option.viewControl.beta=e.beta),e.distance!=null&&(this.option.viewControl.distance=e.distance),e.center!=null&&(this.option.viewControl.center=e.center)}},$e={defaultOption:{postEffect:{enable:!1,bloom:{enable:!0,intensity:.1},depthOfField:{enable:!1,focalRange:20,focalDistance:50,blurRadius:10,fstop:2.8,quality:"medium"},screenSpaceAmbientOcclusion:{enable:!1,radius:2,quality:"medium",intensity:1},screenSpaceReflection:{enable:!1,quality:"medium",maxRoughness:.8},colorCorrection:{enable:!0,exposure:0,brightness:0,contrast:1,saturation:1,lookupTexture:""},edge:{enable:!1},FXAA:{enable:!1}},temporalSuperSampling:{enable:"auto"}}},Je={defaultOption:{light:{main:{shadow:!1,shadowQuality:"high",color:"#fff",intensity:1,alpha:0,beta:0},ambient:{color:"#fff",intensity:.2},ambientCubemap:{texture:null,exposure:1,diffuseIntensity:.5,specularIntensity:.5}}}},Gt=_.tF.extend({type:"grid3D",dependencies:["xAxis3D","yAxis3D","zAxis3D"],defaultOption:{show:!0,zlevel:-10,left:0,top:0,width:"100%",height:"100%",environment:"auto",boxWidth:100,boxHeight:100,boxDepth:100,axisPointer:{show:!0,lineStyle:{color:"rgba(0, 0, 0, 0.8)",width:1},label:{show:!0,formatter:null,margin:8,textStyle:{fontSize:14,color:"#fff",backgroundColor:"rgba(0,0,0,0.5)",padding:3,borderRadius:3}}},axisLine:{show:!0,lineStyle:{color:"#333",width:2,type:"solid"}},axisTick:{show:!0,inside:!1,length:3,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,margin:8,textStyle:{fontSize:12}},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}},light:{main:{alpha:30,beta:40},ambient:{intensity:.4}},viewControl:{alpha:20,beta:40,autoRotate:!1,distance:200,minDistance:40,maxDistance:400}}});_.D5.merge(Gt.prototype,zt),_.D5.merge(Gt.prototype,$e),_.D5.merge(Gt.prototype,Je);var va=Gt,Ft=A(65261),ir=A(85038),ct=B.firstNotNull,rr={left:0,middle:1,right:2};function nr(e){return e instanceof Array||(e=[e,e]),e}var ar=ir.Z.extend(function(){return{zr:null,viewGL:null,_center:new me.Z,minDistance:.5,maxDistance:1.5,maxOrthographicSize:300,minOrthographicSize:30,minAlpha:-90,maxAlpha:90,minBeta:-1/0,maxBeta:1/0,autoRotateAfterStill:0,autoRotateDirection:"cw",autoRotateSpeed:60,damping:.8,rotateSensitivity:1,zoomSensitivity:1,panSensitivity:1,panMouseButton:"middle",rotateMouseButton:"left",_mode:"rotate",_camera:null,_needsUpdate:!1,_rotating:!1,_phi:0,_theta:0,_mouseX:0,_mouseY:0,_rotateVelocity:new be.Z,_panVelocity:new be.Z,_distance:500,_zoomSpeed:0,_stillTimeout:0,_animators:[]}},function(){["_mouseDownHandler","_mouseWheelHandler","_mouseMoveHandler","_mouseUpHandler","_pinchHandler","_contextMenuHandler","_update"].forEach(function(e){this[e]=this[e].bind(this)},this)},{init:function(){var e=this.zr;e&&(e.on("mousedown",this._mouseDownHandler),e.on("globalout",this._mouseUpHandler),e.on("mousewheel",this._mouseWheelHandler),e.on("pinch",this._pinchHandler),e.animation.on("frame",this._update),e.dom.addEventListener("contextmenu",this._contextMenuHandler))},dispose:function(){var e=this.zr;e&&(e.off("mousedown",this._mouseDownHandler),e.off("mousemove",this._mouseMoveHandler),e.off("mouseup",this._mouseUpHandler),e.off("mousewheel",this._mouseWheelHandler),e.off("pinch",this._pinchHandler),e.off("globalout",this._mouseUpHandler),e.dom.removeEventListener("contextmenu",this._contextMenuHandler),e.animation.off("frame",this._update)),this.stopAllAnimation()},getDistance:function(){return this._distance},setDistance:function(e){this._distance=e,this._needsUpdate=!0},getOrthographicSize:function(){return this._orthoSize},setOrthographicSize:function(e){this._orthoSize=e,this._needsUpdate=!0},getAlpha:function(){return this._theta/Math.PI*180},getBeta:function(){return-this._phi/Math.PI*180},getCenter:function(){return this._center.toArray()},setAlpha:function(e){e=Math.max(Math.min(this.maxAlpha,e),this.minAlpha),this._theta=e/180*Math.PI,this._needsUpdate=!0},setBeta:function(e){e=Math.max(Math.min(this.maxBeta,e),this.minBeta),this._phi=-e/180*Math.PI,this._needsUpdate=!0},setCenter:function(e){this._center.setArray(e)},setViewGL:function(e){this.viewGL=e},getCamera:function(){return this.viewGL.camera},setFromViewControlModel:function(e,t){t=t||{};var i=t.baseDistance||0,r=t.baseOrthoSize||1,n=e.get("projection");n!=="perspective"&&n!=="orthographic"&&n!=="isometric"&&(n="perspective"),this._projection=n,this.viewGL.setProjection(n);var a=e.get("distance")+i,o=e.get("orthographicSize")+r;[["damping",.8],["autoRotate",!1],["autoRotateAfterStill",3],["autoRotateDirection","cw"],["autoRotateSpeed",10],["minDistance",30],["maxDistance",400],["minOrthographicSize",30],["maxOrthographicSize",300],["minAlpha",-90],["maxAlpha",90],["minBeta",-1/0],["maxBeta",1/0],["rotateSensitivity",1],["zoomSensitivity",1],["panSensitivity",1],["panMouseButton","left"],["rotateMouseButton","middle"]].forEach(function(c){this[c[0]]=ct(e.get(c[0]),c[1])},this),this.minDistance+=i,this.maxDistance+=i,this.minOrthographicSize+=r,this.maxOrthographicSize+=r;var s=e.ecModel,l={};["animation","animationDurationUpdate","animationEasingUpdate"].forEach(function(c){l[c]=ct(e.get(c),s&&s.get(c))});var h=ct(t.alpha,e.get("alpha"))||0,u=ct(t.beta,e.get("beta"))||0,f=ct(t.center,e.get("center"))||[0,0,0];l.animation&&l.animationDurationUpdate>0&&this._notFirst?this.animateTo({alpha:h,beta:u,center:f,distance:a,orthographicSize:o,easing:l.animationEasingUpdate,duration:l.animationDurationUpdate}):(this.setDistance(a),this.setAlpha(h),this.setBeta(u),this.setCenter(f),this.setOrthographicSize(o)),this._notFirst=!0,this._validateProperties()},_validateProperties:function(){},animateTo:function(e){var t=this.zr,i=this,r={},n={};return e.distance!=null&&(r.distance=this.getDistance(),n.distance=e.distance),e.orthographicSize!=null&&(r.orthographicSize=this.getOrthographicSize(),n.orthographicSize=e.orthographicSize),e.alpha!=null&&(r.alpha=this.getAlpha(),n.alpha=e.alpha),e.beta!=null&&(r.beta=this.getBeta(),n.beta=e.beta),e.center!=null&&(r.center=this.getCenter(),n.center=e.center),this._addAnimator(t.animation.animate(r).when(e.duration||1e3,n).during(function(){r.alpha!=null&&i.setAlpha(r.alpha),r.beta!=null&&i.setBeta(r.beta),r.distance!=null&&i.setDistance(r.distance),r.center!=null&&i.setCenter(r.center),r.orthographicSize!=null&&i.setOrthographicSize(r.orthographicSize),i._needsUpdate=!0})).start(e.easing||"linear")},stopAllAnimation:function(){for(var e=0;e<this._animators.length;e++)this._animators[e].stop();this._animators.length=0},update:function(){this._needsUpdate=!0,this._update(20)},_isAnimating:function(){return this._animators.length>0},_update:function(e){if(this._rotating){var t=(this.autoRotateDirection==="cw"?1:-1)*this.autoRotateSpeed/180*Math.PI;this._phi-=t*e/1e3,this._needsUpdate=!0}else this._rotateVelocity.len()>0&&(this._needsUpdate=!0);(Math.abs(this._zoomSpeed)>.1||this._panVelocity.len()>0)&&(this._needsUpdate=!0),this._needsUpdate&&(e=Math.min(e,50),this._updateDistanceOrSize(e),this._updatePan(e),this._updateRotate(e),this._updateTransform(),this.getCamera().update(),this.zr&&this.zr.refresh(),this.trigger("update"),this._needsUpdate=!1)},_updateRotate:function(e){var t=this._rotateVelocity;this._phi=t.y*e/20+this._phi,this._theta=t.x*e/20+this._theta,this.setAlpha(this.getAlpha()),this.setBeta(this.getBeta()),this._vectorDamping(t,Math.pow(this.damping,e/16))},_updateDistanceOrSize:function(e){this._projection==="perspective"?this._setDistance(this._distance+this._zoomSpeed*e/20):this._setOrthoSize(this._orthoSize+this._zoomSpeed*e/20),this._zoomSpeed*=Math.pow(this.damping,e/16)},_setDistance:function(e){this._distance=Math.max(Math.min(e,this.maxDistance),this.minDistance)},_setOrthoSize:function(e){this._orthoSize=Math.max(Math.min(e,this.maxOrthographicSize),this.minOrthographicSize);var t=this.getCamera(),i=this._orthoSize,r=i/this.viewGL.viewport.height*this.viewGL.viewport.width;t.left=-r/2,t.right=r/2,t.top=i/2,t.bottom=-i/2},_updatePan:function(e){var t=this._panVelocity,i=this._distance,r=this.getCamera(),n=r.worldTransform.y,a=r.worldTransform.x;this._center.scaleAndAdd(a,-t.x*i/200).scaleAndAdd(n,-t.y*i/200),this._vectorDamping(t,0)},_updateTransform:function(){var e=this.getCamera(),t=new me.Z,i=this._theta+Math.PI/2,r=this._phi+Math.PI/2,n=Math.sin(i);t.x=n*Math.cos(r),t.y=-Math.cos(i),t.z=n*Math.sin(r),e.position.copy(this._center).scaleAndAdd(t,this._distance),e.rotation.identity().rotateY(-this._phi).rotateX(-this._theta)},_startCountingStill:function(){clearTimeout(this._stillTimeout);var e=this.autoRotateAfterStill,t=this;!isNaN(e)&&e>0&&(this._stillTimeout=setTimeout(function(){t._rotating=!0},e*1e3))},_vectorDamping:function(e,t){var i=e.len();i=i*t,i<1e-4&&(i=0),e.normalize().scale(i)},_decomposeTransform:function(){if(this.getCamera()){this.getCamera().updateWorldTransform();var e=this.getCamera().worldTransform.z,t=Math.asin(e.y),i=Math.atan2(e.x,e.z);this._theta=t,this._phi=-i,this.setBeta(this.getBeta()),this.setAlpha(this.getAlpha()),this.getCamera().aspect?this._setDistance(this.getCamera().position.dist(this._center)):this._setOrthoSize(this.getCamera().top-this.getCamera().bottom)}},_mouseDownHandler:function(e){if(!e.target&&!this._isAnimating()){var t=e.offsetX,i=e.offsetY;this.viewGL&&!this.viewGL.containPoint(t,i)||(this.zr.on("mousemove",this._mouseMoveHandler),this.zr.on("mouseup",this._mouseUpHandler),e.event.targetTouches?e.event.targetTouches.length===1&&(this._mode="rotate"):e.event.button===rr[this.rotateMouseButton]?this._mode="rotate":e.event.button===rr[this.panMouseButton]?this._mode="pan":this._mode="",this._rotateVelocity.set(0,0),this._rotating=!1,this.autoRotate&&this._startCountingStill(),this._mouseX=e.offsetX,this._mouseY=e.offsetY)}},_mouseMoveHandler:function(e){if(!(e.target&&e.target.__isGLToZRProxy)&&!this._isAnimating()){var t=nr(this.panSensitivity),i=nr(this.rotateSensitivity);this._mode==="rotate"?(this._rotateVelocity.y=(e.offsetX-this._mouseX)/this.zr.getHeight()*2*i[0],this._rotateVelocity.x=(e.offsetY-this._mouseY)/this.zr.getWidth()*2*i[1]):this._mode==="pan"&&(this._panVelocity.x=(e.offsetX-this._mouseX)/this.zr.getWidth()*t[0]*400,this._panVelocity.y=(-e.offsetY+this._mouseY)/this.zr.getHeight()*t[1]*400),this._mouseX=e.offsetX,this._mouseY=e.offsetY,e.event.preventDefault()}},_mouseWheelHandler:function(e){if(!this._isAnimating()){var t=e.event.wheelDelta||-e.event.detail;this._zoomHandler(e,t)}},_pinchHandler:function(e){this._isAnimating()||(this._zoomHandler(e,e.pinchScale>1?1:-1),this._mode="")},_zoomHandler:function(e,t){if(t!==0){var i=e.offsetX,r=e.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(i,r))){var n;this._projection==="perspective"?n=Math.max(Math.max(Math.min(this._distance-this.minDistance,this.maxDistance-this._distance))/20,.5):n=Math.max(Math.max(Math.min(this._orthoSize-this.minOrthographicSize,this.maxOrthographicSize-this._orthoSize))/20,.5),this._zoomSpeed=(t>0?-1:1)*n*this.zoomSensitivity,this._rotating=!1,this.autoRotate&&this._mode==="rotate"&&this._startCountingStill(),e.event.preventDefault()}}},_mouseUpHandler:function(){this.zr.off("mousemove",this._mouseMoveHandler),this.zr.off("mouseup",this._mouseUpHandler)},_isRightMouseButtonUsed:function(){return this.rotateMouseButton==="right"||this.panMouseButton==="right"},_contextMenuHandler:function(e){this._isRightMouseButtonUsed()&&e.preventDefault()},_addAnimator:function(e){var t=this._animators;return t.push(e),e.done(function(){var i=t.indexOf(e);i>=0&&t.splice(i,1)}),e}});Object.defineProperty(ar.prototype,"autoRotate",{get:function(e){return this._autoRotate},set:function(e){this._autoRotate=e,this._rotating=e}});var Bt=ar,dt={convertToDynamicArray:function(e){e&&this.resetOffset();var t=this.attributes;for(var i in t)e||!t[i].value?t[i].value=[]:t[i].value=Array.prototype.slice.call(t[i].value);e||!this.indices?this.indices=[]:this.indices=Array.prototype.slice.call(this.indices)},convertToTypedArray:function(){var e=this.attributes;for(var t in e)e[t].value&&e[t].value.length>0?e[t].value=new Float32Array(e[t].value):e[t].value=null;this.indices&&this.indices.length>0&&(this.indices=this.vertexCount>65535?new Uint32Array(this.indices):new Uint16Array(this.indices)),this.dirty()}},$=A(43938),oi=$.Z.vec3,or=[[0,0],[1,1]],sr=H.Z.extend(function(){return{segmentScale:1,dynamic:!0,useNativeLine:!0,attributes:{position:new H.Z.Attribute("position","float",3,"POSITION"),positionPrev:new H.Z.Attribute("positionPrev","float",3),positionNext:new H.Z.Attribute("positionNext","float",3),prevPositionPrev:new H.Z.Attribute("prevPositionPrev","float",3),prevPosition:new H.Z.Attribute("prevPosition","float",3),prevPositionNext:new H.Z.Attribute("prevPositionNext","float",3),offset:new H.Z.Attribute("offset","float",1),color:new H.Z.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._triangleOffset=0,this._itemVertexOffsets=[]},setVertexCount:function(e){var t=this.attributes;this.vertexCount!==e&&(t.position.init(e),t.color.init(e),this.useNativeLine||(t.positionPrev.init(e),t.positionNext.init(e),t.offset.init(e)),e>65535?this.indices instanceof Uint16Array&&(this.indices=new Uint32Array(this.indices)):this.indices instanceof Uint32Array&&(this.indices=new Uint16Array(this.indices)))},setTriangleCount:function(e){this.triangleCount!==e&&(e===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(e*3):new Uint16Array(e*3))},_getCubicCurveApproxStep:function(e,t,i,r){var n=oi.dist(e,t)+oi.dist(i,t)+oi.dist(r,i),a=1/(n+1)*this.segmentScale;return a},getCubicCurveVertexCount:function(e,t,i,r){var n=this._getCubicCurveApproxStep(e,t,i,r),a=Math.ceil(1/n);return this.useNativeLine?a*2:a*2+2},getCubicCurveTriangleCount:function(e,t,i,r){var n=this._getCubicCurveApproxStep(e,t,i,r),a=Math.ceil(1/n);return this.useNativeLine?0:a*2},getLineVertexCount:function(){return this.getPolylineVertexCount(or)},getLineTriangleCount:function(){return this.getPolylineTriangleCount(or)},getPolylineVertexCount:function(e){var t;if(typeof e=="number")t=e;else{var i=typeof e[0]!="number";t=i?e.length:e.length/3}return this.useNativeLine?(t-1)*2:(t-1)*2+2},getPolylineTriangleCount:function(e){var t;if(typeof e=="number")t=e;else{var i=typeof e[0]!="number";t=i?e.length:e.length/3}return this.useNativeLine?0:Math.max(t-1,0)*2},addCubicCurve:function(e,t,i,r,n,a){a==null&&(a=1);for(var o=e[0],s=e[1],l=e[2],h=t[0],u=t[1],f=t[2],c=i[0],d=i[1],v=i[2],p=r[0],g=r[1],x=r[2],y=this._getCubicCurveApproxStep(e,t,i,r),T=y*y,w=T*y,S=3*y,b=3*T,L=6*T,D=6*w,P=o-h*2+c,M=s-u*2+d,E=l-f*2+v,N=(h-c)*3-o+p,F=(u-d)*3-s+g,O=(f-v)*3-l+x,z=o,V=s,U=l,C=(h-o)*S+P*b+N*w,J=(u-s)*S+M*b+F*w,I=(f-l)*S+E*b+O*w,ie=P*L+N*D,K=M*L+F*D,ce=E*L+O*D,he=N*D,k=F*D,Me=O*D,q=0,pe=0,ye=Math.ceil(1/y),oe=new Float32Array((ye+1)*3),oe=[],se=0,pe=0;pe<ye+1;pe++)oe[se++]=z,oe[se++]=V,oe[se++]=U,z+=C,V+=J,U+=I,C+=ie,J+=K,I+=ce,ie+=he,K+=k,ce+=Me,q+=y,q>1&&(z=C>0?Math.min(z,p):Math.max(z,p),V=J>0?Math.min(V,g):Math.max(V,g),U=I>0?Math.min(U,x):Math.max(U,x));return this.addPolyline(oe,n,a)},addLine:function(e,t,i,r){return this.addPolyline([e,t],i,r)},addPolyline:function(e,t,i,r,n){if(e.length){var a=typeof e[0]!="number";if(n==null&&(n=a?e.length:e.length/3),!(n<2)){r==null&&(r=0),i==null&&(i=1),this._itemVertexOffsets.push(this._vertexOffset);var a=typeof e[0]!="number",o=a?typeof t[0]!="number":t.length/4===n,s=this.attributes.position,l=this.attributes.positionPrev,h=this.attributes.positionNext,u=this.attributes.color,f=this.attributes.offset,c=this.indices,d=this._vertexOffset,v,p;i=Math.max(i,.01);for(var g=r;g<n;g++){if(a)v=e[g],o?p=t[g]:p=t;else{var x=g*3;if(v=v||[],v[0]=e[x],v[1]=e[x+1],v[2]=e[x+2],o){var y=g*4;p=p||[],p[0]=t[y],p[1]=t[y+1],p[2]=t[y+2],p[3]=t[y+3]}else p=t}if(this.useNativeLine?g>1&&(s.copy(d,d-1),u.copy(d,d-1),d++):(g<n-1&&(l.set(d+2,v),l.set(d+3,v)),g>0&&(h.set(d-2,v),h.set(d-1,v)),s.set(d,v),s.set(d+1,v),u.set(d,p),u.set(d+1,p),f.set(d,i/2),f.set(d+1,-i/2),d+=2),this.useNativeLine)u.set(d,p),s.set(d,v),d++;else if(g>0){var T=this._triangleOffset*3,c=this.indices;c[T]=d-4,c[T+1]=d-3,c[T+2]=d-2,c[T+3]=d-3,c[T+4]=d-1,c[T+5]=d-2,this._triangleOffset+=2}}if(!this.useNativeLine){var w=this._vertexOffset,S=this._vertexOffset+n*2;l.copy(w,w+2),l.copy(w+1,w+3),h.copy(S-1,S-3),h.copy(S-2,S-4)}return this._vertexOffset=d,this._vertexOffset}}},setItemColor:function(e,t){for(var i=this._itemVertexOffsets[e],r=e<this._itemVertexOffsets.length-1?this._itemVertexOffsets[e+1]:this._vertexOffset,n=i;n<r;n++)this.attributes.color.set(n,t);this.dirty("color")},currentTriangleOffset:function(){return this._triangleOffset},currentVertexOffset:function(){return this._vertexOffset}});_.D5.defaults(sr.prototype,dt);var Ze=sr;function Zt(e,t,i,r,n,a,o){this._zr=e,this._x=0,this._y=0,this._rowHeight=0,this.width=r,this.height=n,this.offsetX=t,this.offsetY=i,this.dpr=o,this.gap=a}Zt.prototype={constructor:Zt,clear:function(){this._x=0,this._y=0,this._rowHeight=0},add:function(e,t,i){var r=e.getBoundingRect();t==null&&(t=r.width),i==null&&(i=r.height),t*=this.dpr,i*=this.dpr,this._fitElement(e,t,i);var n=this._x,a=this._y,o=this.width*this.dpr,s=this.height*this.dpr,l=this.gap;if(n+t+l>o&&(n=this._x=0,a+=this._rowHeight+l,this._y=a,this._rowHeight=0),this._x+=t+l,this._rowHeight=Math.max(this._rowHeight,i),a+i+l>s)return null;e.x+=this.offsetX*this.dpr+n,e.y+=this.offsetY*this.dpr+a,this._zr.add(e);var h=[this.offsetX/this.width,this.offsetY/this.height],u=[[n/o+h[0],a/s+h[1]],[(n+t)/o+h[0],(a+i)/s+h[1]]];return u},_fitElement:function(e,t,i){var r=e.getBoundingRect(),n=t/r.width,a=i/r.height;e.x=-r.x*n,e.y=-r.y*a,e.scaleX=n,e.scaleY=a,e.update()}};function lr(e){e=e||{},e.width=e.width||512,e.height=e.height||512,e.devicePixelRatio=e.devicePixelRatio||1,e.gap=e.gap==null?2:e.gap;var t=document.createElement("canvas");t.width=e.width*e.devicePixelRatio,t.height=e.height*e.devicePixelRatio,this._canvas=t,this._texture=new W.Z({image:t,flipY:!1});var i=this;this._zr=_.x_.init(t);var r=this._zr.refreshImmediately;this._zr.refreshImmediately=function(){r.call(this),i._texture.dirty(),i.onupdate&&i.onupdate()},this._dpr=e.devicePixelRatio,this._coords={},this.onupdate=e.onupdate,this._gap=e.gap,this._textureAtlasNodes=[new Zt(this._zr,0,0,e.width,e.height,this._gap,this._dpr)],this._nodeWidth=e.width,this._nodeHeight=e.height,this._currentNodeIdx=0}lr.prototype={clear:function(){for(var e=0;e<this._textureAtlasNodes.length;e++)this._textureAtlasNodes[e].clear();this._currentNodeIdx=0,this._zr.clear(),this._coords={}},getWidth:function(){return this._width},getHeight:function(){return this._height},getTexture:function(){return this._texture},getDevicePixelRatio:function(){return this._dpr},getZr:function(){return this._zr},_getCurrentNode:function(){return this._textureAtlasNodes[this._currentNodeIdx]},_expand:function(){if(this._currentNodeIdx++,this._textureAtlasNodes[this._currentNodeIdx])return this._textureAtlasNodes[this._currentNodeIdx];var e=4096/this._dpr,t=this._textureAtlasNodes,i=t.length,r=i*this._nodeWidth%e,n=Math.floor(i*this._nodeWidth/e)*this._nodeHeight;if(!(n>=e)){var a=(r+this._nodeWidth)*this._dpr,o=(n+this._nodeHeight)*this._dpr;try{this._zr.resize({width:a,height:o})}catch(l){this._canvas.width=a,this._canvas.height=o}var s=new Zt(this._zr,r,n,this._nodeWidth,this._nodeHeight,this._gap,this._dpr);return this._textureAtlasNodes.push(s),s}},add:function(e,t,i){if(this._coords[e.id])return this._coords[e.id];var r=this._getCurrentNode().add(e,t,i);if(!r){var n=this._expand();if(!n)return;r=n.add(e,t,i)}return this._coords[e.id]=r,r},getCoordsScale:function(){var e=this._dpr;return[this._nodeWidth/this._canvas.width*e,this._nodeHeight/this._canvas.height*e]},getCoords:function(e){return this._coords[e]},dispose:function(){this._zr.dispose()}};var si=lr,pa=A(43484);function li(){}li.prototype={constructor:li,setScene:function(e){this._scene=e,this._skybox&&this._skybox.attachScene(this._scene)},initLight:function(e){this._lightRoot=e,this.mainLight=new m.DirectionalLight({shadowBias:.005}),this.ambientLight=new m.AmbientLight,e.add(this.mainLight),e.add(this.ambientLight)},dispose:function(){this._lightRoot&&(this._lightRoot.remove(this.mainLight),this._lightRoot.remove(this.ambientLight))},updateLight:function(e){var t=this.mainLight,i=this.ambientLight,r=e.getModel("light"),n=r.getModel("main"),a=r.getModel("ambient");t.intensity=n.get("intensity"),i.intensity=a.get("intensity"),t.color=m.parseColor(n.get("color")).slice(0,3),i.color=m.parseColor(a.get("color")).slice(0,3);var o=n.get("alpha")||0,s=n.get("beta")||0;t.position.setArray(m.directionFromAlphaBeta(o,s)),t.lookAt(m.Vector3.ZERO),t.castShadow=n.get("shadow"),t.shadowResolution=m.getShadowResolution(n.get("shadowQuality"))},updateAmbientCubemap:function(e,t,i){var r=t.getModel("light.ambientCubemap"),n=r.get("texture");if(n){this._cubemapLightsCache=this._cubemapLightsCache||{};var a=this._cubemapLightsCache[n];if(!a){var o=this;a=this._cubemapLightsCache[n]=m.createAmbientCubemap(r.option,e,i,function(){o._isSkyboxFromAmbientCubemap&&o._skybox.setEnvironmentMap(a.specular.cubemap),i.getZr().refresh()})}this._lightRoot.add(a.diffuse),this._lightRoot.add(a.specular),this._currentCubemapLights=a}else this._currentCubemapLights&&(this._lightRoot.remove(this._currentCubemapLights.diffuse),this._lightRoot.remove(this._currentCubemapLights.specular),this._currentCubemapLights=null)},updateSkybox:function(e,t,i){var r=t.get("environment"),n=this;function a(){return n._skybox=n._skybox||new pa.Z,n._skybox}var o=a();if(r&&r!=="none")if(r==="auto")if(this._isSkyboxFromAmbientCubemap=!0,this._currentCubemapLights){var s=this._currentCubemapLights.specular.cubemap;o.setEnvironmentMap(s),this._scene&&o.attachScene(this._scene),o.material.set("lod",3)}else this._skybox&&this._skybox.detachScene();else if(typeof r=="object"&&r.colorStops||typeof r=="string"&&_.$_.parse(r)){this._isSkyboxFromAmbientCubemap=!1;var l=new m.Texture2D({anisotropic:8,flipY:!1});o.setEnvironmentMap(l);var h=l.image=document.createElement("canvas");h.width=h.height=16;var u=h.getContext("2d"),f=new _.Q.UL({shape:{x:0,y:0,width:16,height:16},style:{fill:r}});_.z$(u,f),o.attachScene(this._scene)}else{this._isSkyboxFromAmbientCubemap=!1;var l=m.loadTexture(r,i,{anisotropic:8,flipY:!1});o.setEnvironmentMap(l),o.attachScene(this._scene)}else this._skybox&&this._skybox.detachScene(this._scene),this._skybox=null;var c=t.coordinateSystem;if(this._skybox)if(c&&c.viewGL&&r!=="auto"&&!(r.match&&r.match(/.hdr$/))){var d=c.viewGL.isLinearSpace()?"define":"undefine";this._skybox.material[d]("fragment","SRGB_DECODE")}else this._skybox.material.undefine("fragment","SRGB_DECODE")}};var qe=li,He=$.Z.vec3,hr=H.Z.extend(function(){return{segmentScale:1,useNativeLine:!0,attributes:{position:new H.Z.Attribute("position","float",3,"POSITION"),normal:new H.Z.Attribute("normal","float",3,"NORMAL"),color:new H.Z.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setQuadCount:function(e){var t=this.attributes,i=this.getQuadVertexCount()*e,r=this.getQuadTriangleCount()*e;this.vertexCount!==i&&(t.position.init(i),t.normal.init(i),t.color.init(i)),this.triangleCount!==r&&(this.indices=i>65535?new Uint32Array(r*3):new Uint16Array(r*3))},getQuadVertexCount:function(){return 4},getQuadTriangleCount:function(){return 2},addQuad:function(){var e=He.create(),t=He.create(),i=He.create(),r=[0,3,1,3,2,1];return function(n,a){var o=this.attributes.position,s=this.attributes.normal,l=this.attributes.color;He.sub(e,n[1],n[0]),He.sub(t,n[2],n[1]),He.cross(i,e,t),He.normalize(i,i);for(var h=0;h<4;h++)o.set(this._vertexOffset+h,n[h]),l.set(this._vertexOffset+h,a),s.set(this._vertexOffset+h,i);for(var u=this._faceOffset*3,h=0;h<6;h++)this.indices[u+h]=r[h]+this._vertexOffset;this._vertexOffset+=4,this._faceOffset+=2}}()});_.D5.defaults(hr.prototype,dt);var ma=hr,hi=B.firstNotNull,ga={x:0,y:2,z:1};function _a(e,t,i,r){var n=[0,0,0],a=r<0?i.getExtentMin():i.getExtentMax();n[ga[i.dim]]=a,e.position.setArray(n),e.rotation.identity(),t.distance=-Math.abs(a),t.normal.set(0,0,0),i.dim==="x"?(e.rotation.rotateY(r*Math.PI/2),t.normal.x=-r):i.dim==="z"?(e.rotation.rotateX(-r*Math.PI/2),t.normal.y=-r):(r>0&&e.rotation.rotateY(Math.PI),t.normal.z=-r)}function Ht(e,t,i){this.rootNode=new m.Node;var r=new m.Mesh({geometry:new Ze({useNativeLine:!1}),material:t,castShadow:!1,ignorePicking:!0,$ignorePicking:!0,renderOrder:1}),n=new m.Mesh({geometry:new ma,material:i,castShadow:!1,culling:!1,ignorePicking:!0,$ignorePicking:!0,renderOrder:0});this.rootNode.add(n),this.rootNode.add(r),this.faceInfo=e,this.plane=new m.Plane,this.linesMesh=r,this.quadsMesh=n}Ht.prototype.update=function(e,t,i){var r=e.coordinateSystem,n=[r.getAxis(this.faceInfo[0]),r.getAxis(this.faceInfo[1])],a=this.linesMesh.geometry,o=this.quadsMesh.geometry;a.convertToDynamicArray(!0),o.convertToDynamicArray(!0),this._updateSplitLines(a,n,e,i),this._udpateSplitAreas(o,n,e,i),a.convertToTypedArray(),o.convertToTypedArray();var s=r.getAxis(this.faceInfo[2]);_a(this.rootNode,this.plane,s,this.faceInfo[3])},Ht.prototype._updateSplitLines=function(e,t,i,r){var n=r.getDevicePixelRatio();t.forEach(function(a,o){var s=a.model,l=t[1-o].getExtent();if(!a.scale.isBlank()){var h=s.getModel("splitLine",i.getModel("splitLine"));if(h.get("show")){var u=h.getModel("lineStyle"),f=u.get("color"),c=hi(u.get("opacity"),1),d=hi(u.get("width"),1);f=_.D5.isArray(f)?f:[f];for(var v=a.getTicksCoords({tickModel:h}),p=0,g=0;g<v.length;g++){var x=v[g].coord,y=m.parseColor(f[p%f.length]);y[3]*=c;var T=[0,0,0],w=[0,0,0];T[o]=w[o]=x,T[1-o]=l[0],w[1-o]=l[1],e.addLine(T,w,y,d*n),p++}}}})},Ht.prototype._udpateSplitAreas=function(e,t,i,r){t.forEach(function(n,a){var o=n.model,s=t[1-a].getExtent();if(!n.scale.isBlank()){var l=o.getModel("splitArea",i.getModel("splitArea"));if(l.get("show")){var h=l.getModel("areaStyle"),u=h.get("color"),f=hi(h.get("opacity"),1);u=_.D5.isArray(u)?u:[u];for(var c=n.getTicksCoords({tickModel:l,clamp:!0}),d=0,v=[0,0,0],p=[0,0,0],g=0;g<c.length;g++){var x=c[g].coord,y=[0,0,0],T=[0,0,0];if(y[a]=T[a]=x,y[1-a]=s[0],T[1-a]=s[1],g===0){v=y,p=T;continue}var w=m.parseColor(u[d%u.length]);w[3]*=f,e.addQuad([v,y,T,p],w),v=y,p=T,d++}}}})};var xa=Ht,ur=[0,1,2,0,2,3],fr=H.Z.extend(function(){return{attributes:{position:new H.Z.Attribute("position","float",3,"POSITION"),texcoord:new H.Z.Attribute("texcoord","float",2,"TEXCOORD_0"),offset:new H.Z.Attribute("offset","float",2),color:new H.Z.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setSpriteCount:function(e){this._spriteCount=e;var t=e*4,i=e*2;this.vertexCount!==t&&(this.attributes.position.init(t),this.attributes.offset.init(t),this.attributes.color.init(t)),this.triangleCount!==i&&(this.indices=t>65535?new Uint32Array(i*3):new Uint16Array(i*3))},setSpriteAlign:function(e,t,i,r,n){i==null&&(i="left"),r==null&&(r="top");var a,o,s,l;switch(n=n||0,i){case"left":a=n,s=t[0]+n;break;case"center":case"middle":a=-t[0]/2,s=t[0]/2;break;case"right":a=-t[0]-n,s=-n;break}switch(r){case"bottom":o=n,l=t[1]+n;break;case"middle":o=-t[1]/2,l=t[1]/2;break;case"top":o=-t[1]-n,l=-n;break}var h=e*4,u=this.attributes.offset;u.set(h,[a,l]),u.set(h+1,[s,l]),u.set(h+2,[s,o]),u.set(h+3,[a,o])},addSprite:function(e,t,i,r,n,a){var o=this._vertexOffset;this.setSprite(this._vertexOffset/4,e,t,i,r,n,a);for(var s=0;s<ur.length;s++)this.indices[this._faceOffset*3+s]=ur[s]+o;return this._faceOffset+=2,this._vertexOffset+=4,o/4},setSprite:function(e,t,i,r,n,a,o){for(var s=e*4,l=this.attributes,h=0;h<4;h++)l.position.set(s+h,t);var u=l.texcoord;u.set(s,[r[0][0],r[0][1]]),u.set(s+1,[r[1][0],r[0][1]]),u.set(s+2,[r[1][0],r[1][1]]),u.set(s+3,[r[0][0],r[1][1]]),this.setSpriteAlign(e,i,n,a,o)}});_.D5.defaults(fr.prototype,dt);var ya=fr,wa=`@export ecgl.labels.vertex

attribute vec3 position: POSITION;
attribute vec2 texcoord: TEXCOORD_0;
attribute vec2 offset;
#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;

varying vec2 v_Texcoord;

void main()
{
 vec4 proj = worldViewProjection * vec4(position, 1.0);

 vec2 screen = (proj.xy / abs(proj.w) + 1.0) * 0.5 * viewport.zw;

 screen += offset;

 proj.xy = (screen / viewport.zw - 0.5) * 2.0 * abs(proj.w);
 gl_Position = proj;
#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif
 v_Texcoord = texcoord;
}
@end


@export ecgl.labels.fragment

uniform vec3 color : [1.0, 1.0, 1.0];
uniform float alpha : 1.0;
uniform sampler2D textureAtlas;
uniform vec2 uvScale: [1.0, 1.0];

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif
varying float v_Miter;

varying vec2 v_Texcoord;

void main()
{
 gl_FragColor = vec4(color, alpha) * texture2D(textureAtlas, v_Texcoord * uvScale);
#ifdef VERTEX_COLOR
 gl_FragColor *= v_Color;
#endif
}

@end`;m.Shader.import(wa);var ui=m.Mesh.extend(function(){var e=new ya({dynamic:!0}),t=new m.Material({shader:m.createShader("ecgl.labels"),transparent:!0,depthMask:!1});return{geometry:e,material:t,culling:!1,castShadow:!1,ignorePicking:!0}}),Ve=B.firstNotNull,Ue={x:0,y:2,z:1};function fi(e,t){var i=new m.Mesh({geometry:new Ze({useNativeLine:!1}),material:t,castShadow:!1,ignorePicking:!0,renderOrder:2}),r=new ui;r.material.depthMask=!1;var n=new m.Node;n.add(i),n.add(r),this.rootNode=n,this.dim=e,this.linesMesh=i,this.labelsMesh=r,this.axisLineCoords=null,this.labelElements=[]}var ci={x:"y",y:"x",z:"y"};fi.prototype.update=function(e,t,i){var r=e.coordinateSystem,n=r.getAxis(this.dim),a=this.linesMesh.geometry,o=this.labelsMesh.geometry;a.convertToDynamicArray(!0),o.convertToDynamicArray(!0);var s=n.model,l=n.getExtent(),E=i.getDevicePixelRatio(),h=s.getModel("axisLine",e.getModel("axisLine")),u=s.getModel("axisTick",e.getModel("axisTick")),f=s.getModel("axisLabel",e.getModel("axisLabel")),c=h.get("lineStyle.color");if(h.get("show")){var d=h.getModel("lineStyle"),v=[0,0,0],p=[0,0,0],g=Ue[n.dim];v[g]=l[0],p[g]=l[1],this.axisLineCoords=[v,p];var x=m.parseColor(c),y=Ve(d.get("width"),1),T=Ve(d.get("opacity"),1);x[3]*=T,a.addLine(v,p,x,y*E)}if(u.get("show")){var w=u.getModel("lineStyle"),S=m.parseColor(Ve(w.get("color"),c)),y=Ve(w.get("width"),1);S[3]*=Ve(w.get("opacity"),1);for(var b=n.getTicksCoords(),L=u.get("length"),D=0;D<b.length;D++){var P=b[D].coord,v=[0,0,0],p=[0,0,0],g=Ue[n.dim],M=Ue[ci[n.dim]];v[g]=p[g]=P,p[M]=L,a.addLine(v,p,S,y*E)}}this.labelElements=[];var E=i.getDevicePixelRatio();if(f.get("show"))for(var b=n.getTicksCoords(),N=s.get("data"),F=f.get("margin"),O=n.getViewLabels(),D=0;D<O.length;D++){var z=O[D].tickValue,V=O[D].formattedLabel,U=O[D].rawLabel,P=n.dataToCoord(z),C=[0,0,0],g=Ue[n.dim],M=Ue[ci[n.dim]];C[g]=C[g]=P,C[M]=F;var J=f;N&&N[z]&&N[z].textStyle&&(J=new _.Hn(N[z].textStyle,f,s.ecModel));var I=Ve(J.get("color"),c),ie=new _.Q.xv({style:(0,Ft.Lr)(J,{text:V,fill:typeof I=="function"?I(n.type==="category"?U:n.type==="value"?z+"":z,D):I,verticalAlign:"top",align:"left"})}),K=t.add(ie),ce=ie.getBoundingRect();o.addSprite(C,[ce.width*E,ce.height*E],K),this.labelElements.push(ie)}if(s.get("name")){var he=s.getModel("nameTextStyle"),C=[0,0,0],g=Ue[n.dim],M=Ue[ci[n.dim]],k=Ve(he.get("color"),c),Me=he.get("borderColor"),y=he.get("borderWidth");C[g]=C[g]=(l[0]+l[1])/2,C[M]=s.get("nameGap");var ie=new _.Q.xv({style:(0,Ft.Lr)(he,{text:s.get("name"),fill:k,stroke:Me,lineWidth:y})}),K=t.add(ie),ce=ie.getBoundingRect();o.addSprite(C,[ce.width*E,ce.height*E],K),ie.__idx=this.labelElements.length,this.nameLabelElement=ie}this.labelsMesh.material.set("textureAtlas",t.getTexture()),this.labelsMesh.material.set("uvScale",t.getCoordsScale()),a.convertToTypedArray(),o.convertToTypedArray()},fi.prototype.setSpriteAlign=function(e,t,i){for(var r=i.getDevicePixelRatio(),n=this.labelsMesh.geometry,a=0;a<this.labelElements.length;a++){var o=this.labelElements[a],s=o.getBoundingRect();n.setSpriteAlign(a,[s.width*r,s.height*r],e,t)}var l=this.nameLabelElement;if(l){var s=l.getBoundingRect();n.setSpriteAlign(l.__idx,[s.width*r,s.height*r],e,t),n.dirty()}this.textAlign=e,this.textVerticalAlign=t};var Ta=fi,Vt=`@export ecgl.lines3D.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec3 position: POSITION;
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;

void main()
{
 gl_Position = worldViewProjection * vec4(position, 1.0);
 v_Color = a_Color;
}

@end

@export ecgl.lines3D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif
}
@end



@export ecgl.lines3D.clipNear

vec4 clipNear(vec4 p1, vec4 p2) {
 float n = (p1.w - near) / (p1.w - p2.w);
 return vec4(mix(p1.xy, p2.xy, n), -near, near);
}

@end

@export ecgl.lines3D.expandLine
#ifdef VERTEX_ANIMATION
 vec4 prevProj = worldViewProjection * vec4(mix(prevPositionPrev, positionPrev, percent), 1.0);
 vec4 currProj = worldViewProjection * vec4(mix(prevPosition, position, percent), 1.0);
 vec4 nextProj = worldViewProjection * vec4(mix(prevPositionNext, positionNext, percent), 1.0);
#else
 vec4 prevProj = worldViewProjection * vec4(positionPrev, 1.0);
 vec4 currProj = worldViewProjection * vec4(position, 1.0);
 vec4 nextProj = worldViewProjection * vec4(positionNext, 1.0);
#endif

 if (currProj.w < 0.0) {
 if (nextProj.w > 0.0) {
 currProj = clipNear(currProj, nextProj);
 }
 else if (prevProj.w > 0.0) {
 currProj = clipNear(currProj, prevProj);
 }
 }

 vec2 prevScreen = (prevProj.xy / abs(prevProj.w) + 1.0) * 0.5 * viewport.zw;
 vec2 currScreen = (currProj.xy / abs(currProj.w) + 1.0) * 0.5 * viewport.zw;
 vec2 nextScreen = (nextProj.xy / abs(nextProj.w) + 1.0) * 0.5 * viewport.zw;

 vec2 dir;
 float len = offset;
 if (position == positionPrev) {
 dir = normalize(nextScreen - currScreen);
 }
 else if (position == positionNext) {
 dir = normalize(currScreen - prevScreen);
 }
 else {
 vec2 dirA = normalize(currScreen - prevScreen);
 vec2 dirB = normalize(nextScreen - currScreen);

 vec2 tanget = normalize(dirA + dirB);

 float miter = 1.0 / max(dot(tanget, dirA), 0.5);
 len *= miter;
 dir = tanget;
 }

 dir = vec2(-dir.y, dir.x) * len;
 currScreen += dir;

 currProj.xy = (currScreen / viewport.zw - 0.5) * 2.0 * abs(currProj.w);
@end


@export ecgl.meshLines3D.vertex

attribute vec3 position: POSITION;
attribute vec3 positionPrev;
attribute vec3 positionNext;
attribute float offset;
attribute vec4 a_Color : COLOR;

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute vec3 prevPositionPrev;
attribute vec3 prevPositionNext;
uniform float percent : 1.0;
#endif

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;
uniform float near : NEAR;

varying vec4 v_Color;

@import ecgl.common.wireframe.vertexHeader

@import ecgl.lines3D.clipNear

void main()
{
 @import ecgl.lines3D.expandLine

 gl_Position = currProj;

 v_Color = a_Color;

 @import ecgl.common.wireframe.vertexMain
}
@end


@export ecgl.meshLines3D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif

 @import ecgl.common.wireframe.fragmentMain
}

@end`,cr=B.firstNotNull;m.Shader.import(Vt);var We={x:0,y:2,z:1},ba=_.Ir.extend({type:"grid3D",__ecgl__:!0,init:function(e,t){var i=[["y","z","x",-1,"left"],["y","z","x",1,"right"],["x","y","z",-1,"bottom"],["x","y","z",1,"top"],["x","z","y",-1,"far"],["x","z","y",1,"near"]],r=["x","y","z"],n=new m.Material({shader:m.createShader("ecgl.color"),depthMask:!1,transparent:!0}),a=new m.Material({shader:m.createShader("ecgl.meshLines3D"),depthMask:!1,transparent:!0});n.define("fragment","DOUBLE_SIDED"),n.define("both","VERTEX_COLOR"),this.groupGL=new m.Node,this._control=new Bt({zr:t.getZr()}),this._control.init(),this._faces=i.map(function(s){var l=new xa(s,a,n);return this.groupGL.add(l.rootNode),l},this),this._axes=r.map(function(s){var l=new Ta(s,a);return this.groupGL.add(l.rootNode),l},this);var o=t.getDevicePixelRatio();this._axisLabelSurface=new si({width:256,height:256,devicePixelRatio:o}),this._axisLabelSurface.onupdate=function(){t.getZr().refresh()},this._axisPointerLineMesh=new m.Mesh({geometry:new Ze({useNativeLine:!1}),material:a,castShadow:!1,ignorePicking:!0,renderOrder:3}),this.groupGL.add(this._axisPointerLineMesh),this._axisPointerLabelsSurface=new si({width:128,height:128,devicePixelRatio:o}),this._axisPointerLabelsMesh=new ui({ignorePicking:!0,renderOrder:4,castShadow:!1}),this._axisPointerLabelsMesh.material.set("textureAtlas",this._axisPointerLabelsSurface.getTexture()),this.groupGL.add(this._axisPointerLabelsMesh),this._lightRoot=new m.Node,this._sceneHelper=new qe,this._sceneHelper.initLight(this._lightRoot)},render:function(e,t,i){this._model=e,this._api=i;var r=e.coordinateSystem;r.viewGL.add(this._lightRoot),e.get("show")?r.viewGL.add(this.groupGL):r.viewGL.remove(this.groupGL);var n=this._control;n.setViewGL(r.viewGL);var a=e.getModel("viewControl");n.setFromViewControlModel(a,0),this._axisLabelSurface.clear(),n.off("update"),e.get("show")&&(this._faces.forEach(function(o){o.update(e,t,i)},this),this._axes.forEach(function(o){o.update(e,this._axisLabelSurface,i)},this)),n.on("update",this._onCameraChange.bind(this,e,i),this),this._sceneHelper.setScene(r.viewGL.scene),this._sceneHelper.updateLight(e),r.viewGL.setPostEffect(e.getModel("postEffect"),i),r.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._initMouseHandler(e)},afterRender:function(e,t,i,r){var n=r.renderer;this._sceneHelper.updateAmbientCubemap(n,e,i),this._sceneHelper.updateSkybox(n,e,i)},showAxisPointer:function(e,t,i,r){this._doShowAxisPointer(),this._updateAxisPointer(r.value)},hideAxisPointer:function(e,t,i,r){this._doHideAxisPointer()},_initMouseHandler:function(e){var t=e.coordinateSystem,i=t.viewGL;e.get("show")&&e.get("axisPointer.show")?i.on("mousemove",this._updateAxisPointerOnMousePosition,this):i.off("mousemove",this._updateAxisPointerOnMousePosition)},_updateAxisPointerOnMousePosition:function(e){if(!e.target){for(var t=this._model,i=t.coordinateSystem,r=i.viewGL,n=r.castRay(e.offsetX,e.offsetY,new m.Ray),a,o=0;o<this._faces.length;o++){var s=this._faces[o];if(!s.rootNode.invisible){s.plane.normal.dot(r.camera.worldTransform.z)<0&&s.plane.normal.negate();var l=n.intersectPlane(s.plane);if(l){var h=i.getAxis(s.faceInfo[0]),u=i.getAxis(s.faceInfo[1]),f=We[s.faceInfo[0]],c=We[s.faceInfo[1]];h.contain(l.array[f])&&u.contain(l.array[c])&&(a=l)}}}if(a){var d=i.pointToData(a.array,[],!0);this._updateAxisPointer(d),this._doShowAxisPointer()}else this._doHideAxisPointer()}},_onCameraChange:function(e,t){e.get("show")&&(this._updateFaceVisibility(),this._updateAxisLinePosition());var i=this._control;t.dispatchAction({type:"grid3DChangeCamera",alpha:i.getAlpha(),beta:i.getBeta(),distance:i.getDistance(),center:i.getCenter(),from:this.uid,grid3DId:e.id})},_updateFaceVisibility:function(){var e=this._control.getCamera(),t=new m.Vector3;e.update();for(var i=0;i<this._faces.length/2;i++){for(var r=[],n=0;n<2;n++){var a=this._faces[i*2+n];a.rootNode.getWorldPosition(t),t.transformMat4(e.viewMatrix),r[n]=t.z}var o=r[0]>r[1]?0:1,s=this._faces[i*2+o],l=this._faces[i*2+1-o];s.rootNode.invisible=!0,l.rootNode.invisible=!1}},_updateAxisLinePosition:function(){var e=this._model.coordinateSystem,t=e.getAxis("x"),i=e.getAxis("y"),r=e.getAxis("z"),n=r.getExtentMax(),a=r.getExtentMin(),o=t.getExtentMin(),s=t.getExtentMax(),l=i.getExtentMax(),h=i.getExtentMin(),u=this._axes[0].rootNode,f=this._axes[1].rootNode,c=this._axes[2].rootNode,d=this._faces,v=d[4].rootNode.invisible?h:l,p=d[2].rootNode.invisible?n:a,g=d[0].rootNode.invisible?o:s,x=d[2].rootNode.invisible?n:a,y=d[0].rootNode.invisible?s:o,T=d[4].rootNode.invisible?h:l;u.rotation.identity(),f.rotation.identity(),c.rotation.identity(),d[4].rootNode.invisible&&(this._axes[0].flipped=!0,u.rotation.rotateX(Math.PI)),d[0].rootNode.invisible&&(this._axes[1].flipped=!0,f.rotation.rotateZ(Math.PI)),d[4].rootNode.invisible&&(this._axes[2].flipped=!0,c.rotation.rotateY(Math.PI)),u.position.set(0,p,v),f.position.set(g,x,0),c.position.set(y,0,T),u.update(),f.update(),c.update(),this._updateAxisLabelAlign()},_updateAxisLabelAlign:function(){var e=this._control.getCamera(),t=[new m.Vector4,new m.Vector4],i=new m.Vector4;this.groupGL.getWorldPosition(i),i.w=1,i.transformMat4(e.viewMatrix).transformMat4(e.projectionMatrix),i.x/=i.w,i.y/=i.w,this._axes.forEach(function(r){for(var n=r.axisLineCoords,a=r.labelsMesh.geometry,o=0;o<t.length;o++)t[o].setArray(n[o]),t[o].w=1,t[o].transformMat4(r.rootNode.worldTransform).transformMat4(e.viewMatrix).transformMat4(e.projectionMatrix),t[o].x/=t[o].w,t[o].y/=t[o].w;var s=t[1].x-t[0].x,l=t[1].y-t[0].y,h=(t[1].x+t[0].x)/2,u=(t[1].y+t[0].y)/2,f,c;Math.abs(l/s)<.5?(f="center",c=u>i.y?"bottom":"top"):(c="middle",f=h>i.x?"left":"right"),r.setSpriteAlign(f,c,this._api)},this)},_doShowAxisPointer:function(){this._axisPointerLineMesh.invisible&&(this._axisPointerLineMesh.invisible=!1,this._axisPointerLabelsMesh.invisible=!1,this._api.getZr().refresh())},_doHideAxisPointer:function(){this._axisPointerLineMesh.invisible||(this._axisPointerLineMesh.invisible=!0,this._axisPointerLabelsMesh.invisible=!0,this._api.getZr().refresh())},_updateAxisPointer:function(e){var t=this._model.coordinateSystem,i=t.dataToPoint(e),r=this._axisPointerLineMesh,n=r.geometry,a=this._model.getModel("axisPointer"),o=this._api.getDevicePixelRatio();n.convertToDynamicArray(!0);function s(D){return B.firstNotNull(D.model.get("axisPointer.show"),a.get("show"))}function l(D){var P=D.model.getModel("axisPointer",a),M=P.getModel("lineStyle"),E=m.parseColor(M.get("color")),N=cr(M.get("width"),1),F=cr(M.get("opacity"),1);return E[3]*=F,{color:E,lineWidth:N}}for(var h=0;h<this._faces.length;h++){var u=this._faces[h];if(!u.rootNode.invisible){for(var f=u.faceInfo,c=f[3]<0?t.getAxis(f[2]).getExtentMin():t.getAxis(f[2]).getExtentMax(),d=We[f[2]],v=0;v<2;v++){var p=f[v],g=f[1-v],x=t.getAxis(p),y=t.getAxis(g);if(s(x)){var T=[0,0,0],w=[0,0,0],S=We[p],b=We[g];T[S]=w[S]=i[S],T[d]=w[d]=c,T[b]=y.getExtentMin(),w[b]=y.getExtentMax();var L=l(x);n.addLine(T,w,L.color,L.lineWidth*o)}}if(s(t.getAxis(f[2]))){var T=i.slice(),w=i.slice();w[d]=c;var L=l(t.getAxis(f[2]));n.addLine(T,w,L.color,L.lineWidth*o)}}}n.convertToTypedArray(),this._updateAxisPointerLabelsMesh(e),this._api.getZr().refresh()},_updateAxisPointerLabelsMesh:function(e){var t=this._model,i=this._axisPointerLabelsMesh,r=this._axisPointerLabelsSurface,n=t.coordinateSystem,a=t.getModel("axisPointer");i.geometry.convertToDynamicArray(!0),r.clear();var o={x:"y",y:"x",z:"y"};this._axes.forEach(function(s,l){var h=n.getAxis(s.dim),u=h.model,f=u.getModel("axisPointer",a),c=f.getModel("label"),d=f.get("lineStyle.color");if(!(!c.get("show")||!f.get("show"))){var v=e[l],p=c.get("formatter"),g=h.scale.getLabel({value:v});if(p!=null)g=p(g,e);else if(h.scale.type==="interval"||h.scale.type==="log"){var x=_.Rx.getPrecisionSafe(h.scale.getTicks()[0]);g=v.toFixed(x+2)}var y=c.get("color"),T=new _.Q.xv({style:(0,Ft.Lr)(c,{text:g,fill:y||d,align:"left",verticalAlign:"top"})}),w=r.add(T),S=T.getBoundingRect(),b=this._api.getDevicePixelRatio(),L=s.rootNode.position.toArray(),D=We[o[s.dim]];L[D]+=(s.flipped?-1:1)*c.get("margin"),L[We[s.dim]]=h.dataToCoord(e[l]),i.geometry.addSprite(L,[S.width*b,S.height*b],w,s.textAlign,s.textVerticalAlign)}},this),r.getZr().refreshImmediately(),i.material.set("uvScale",r.getCoordsScale()),i.geometry.convertToTypedArray()},dispose:function(){this.groupGL.removeAll(),this._control.dispose(),this._axisLabelSurface.dispose(),this._axisPointerLabelsSurface.dispose()}}),dr=A(54146);function Ut(e){dr.Z.call(this,e),this.type="cartesian3D",this.dimensions=["x","y","z"],this.size=[0,0,0]}Ut.prototype={constructor:Ut,model:null,containPoint:function(e){return this.getAxis("x").contain(e[0])&&this.getAxis("y").contain(e[2])&&this.getAxis("z").contain(e[1])},containData:function(e){return this.getAxis("x").containData(e[0])&&this.getAxis("y").containData(e[1])&&this.getAxis("z").containData(e[2])},dataToPoint:function(e,t,i){return t=t||[],t[0]=this.getAxis("x").dataToCoord(e[0],i),t[2]=this.getAxis("y").dataToCoord(e[1],i),t[1]=this.getAxis("z").dataToCoord(e[2],i),t},pointToData:function(e,t,i){return t=t||[],t[0]=this.getAxis("x").coordToData(e[0],i),t[1]=this.getAxis("y").coordToData(e[2],i),t[2]=this.getAxis("z").coordToData(e[1],i),t}},_.D5.inherits(Ut,dr.Z);var vr=Ut;function Wt(e,t,i){_.RD.call(this,e,t,i)}Wt.prototype={constructor:Wt,getExtentMin:function(){var e=this._extent;return Math.min(e[0],e[1])},getExtentMax:function(){var e=this._extent;return Math.max(e[0],e[1])},calculateCategoryInterval:function(){return Math.floor(this.scale.count()/8)}},_.D5.inherits(Wt,_.RD);var Sa=Wt,kt=A(28734),Da=A(79908),Se=A(76728),La=A(61857),fe=A(80785);function Aa(e,t){for(var i=0,r=1/t,n=e;n>0;)i=i+r*(n%t),n=Math.floor(n/t),r=r/t;return i}var et=Aa,Ca=`@export ecgl.ssao.estimate

uniform sampler2D depthTex;

uniform sampler2D normalTex;

uniform sampler2D noiseTex;

uniform vec2 depthTexSize;

uniform vec2 noiseTexSize;

uniform mat4 projection;

uniform mat4 projectionInv;

uniform mat4 viewInverseTranspose;

uniform vec3 kernel[KERNEL_SIZE];

uniform float radius : 1;

uniform float power : 1;

uniform float bias: 1e-2;

uniform float intensity: 1.0;

varying vec2 v_Texcoord;

float ssaoEstimator(in vec3 originPos, in mat3 kernelBasis) {
 float occlusion = 0.0;

 for (int i = 0; i < KERNEL_SIZE; i++) {
 vec3 samplePos = kernel[i];
#ifdef NORMALTEX_ENABLED
 samplePos = kernelBasis * samplePos;
#endif
 samplePos = samplePos * radius + originPos;

 vec4 texCoord = projection * vec4(samplePos, 1.0);
 texCoord.xy /= texCoord.w;

 vec4 depthTexel = texture2D(depthTex, texCoord.xy * 0.5 + 0.5);

 float sampleDepth = depthTexel.r * 2.0 - 1.0;
 if (projection[3][3] == 0.0) {
 sampleDepth = projection[3][2] / (sampleDepth * projection[2][3] - projection[2][2]);
 }
 else {
 sampleDepth = (sampleDepth - projection[3][2]) / projection[2][2];
 }
 
 float rangeCheck = smoothstep(0.0, 1.0, radius / abs(originPos.z - sampleDepth));
 occlusion += rangeCheck * step(samplePos.z, sampleDepth - bias);
 }
#ifdef NORMALTEX_ENABLED
 occlusion = 1.0 - occlusion / float(KERNEL_SIZE);
#else
 occlusion = 1.0 - clamp((occlusion / float(KERNEL_SIZE) - 0.6) * 2.5, 0.0, 1.0);
#endif
 return pow(occlusion, power);
}

void main()
{

 vec4 depthTexel = texture2D(depthTex, v_Texcoord);

#ifdef NORMALTEX_ENABLED
 vec4 tex = texture2D(normalTex, v_Texcoord);
 if (dot(tex.rgb, tex.rgb) == 0.0) {
 gl_FragColor = vec4(1.0);
 return;
 }
 vec3 N = tex.rgb * 2.0 - 1.0;
 N = (viewInverseTranspose * vec4(N, 0.0)).xyz;

 vec2 noiseTexCoord = depthTexSize / vec2(noiseTexSize) * v_Texcoord;
 vec3 rvec = texture2D(noiseTex, noiseTexCoord).rgb * 2.0 - 1.0;
 vec3 T = normalize(rvec - N * dot(rvec, N));
 vec3 BT = normalize(cross(N, T));
 mat3 kernelBasis = mat3(T, BT, N);
#else
 if (depthTexel.r > 0.99999) {
 gl_FragColor = vec4(1.0);
 return;
 }
 mat3 kernelBasis;
#endif

 float z = depthTexel.r * 2.0 - 1.0;

 vec4 projectedPos = vec4(v_Texcoord * 2.0 - 1.0, z, 1.0);
 vec4 p4 = projectionInv * projectedPos;

 vec3 position = p4.xyz / p4.w;

 float ao = ssaoEstimator(position, kernelBasis);
 ao = clamp(1.0 - (1.0 - ao) * intensity, 0.0, 1.0);
 gl_FragColor = vec4(vec3(ao), 1.0);
}

@end


@export ecgl.ssao.blur
#define SHADER_NAME SSAO_BLUR

uniform sampler2D ssaoTexture;

#ifdef NORMALTEX_ENABLED
uniform sampler2D normalTex;
#endif

varying vec2 v_Texcoord;

uniform vec2 textureSize;
uniform float blurSize : 1.0;

uniform int direction: 0.0;

#ifdef DEPTHTEX_ENABLED
uniform sampler2D depthTex;
uniform mat4 projection;
uniform float depthRange : 0.5;

float getLinearDepth(vec2 coord)
{
 float depth = texture2D(depthTex, coord).r * 2.0 - 1.0;
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
}
#endif

void main()
{
 float kernel[5];
 kernel[0] = 0.122581;
 kernel[1] = 0.233062;
 kernel[2] = 0.288713;
 kernel[3] = 0.233062;
 kernel[4] = 0.122581;

 vec2 off = vec2(0.0);
 if (direction == 0) {
 off[0] = blurSize / textureSize.x;
 }
 else {
 off[1] = blurSize / textureSize.y;
 }

 vec2 coord = v_Texcoord;

 float sum = 0.0;
 float weightAll = 0.0;

#ifdef NORMALTEX_ENABLED
 vec3 centerNormal = texture2D(normalTex, v_Texcoord).rgb * 2.0 - 1.0;
#endif
#if defined(DEPTHTEX_ENABLED)
 float centerDepth = getLinearDepth(v_Texcoord);
#endif

 for (int i = 0; i < 5; i++) {
 vec2 coord = clamp(v_Texcoord + vec2(float(i) - 2.0) * off, vec2(0.0), vec2(1.0));

 float w = kernel[i];
#ifdef NORMALTEX_ENABLED
 vec3 normal = texture2D(normalTex, coord).rgb * 2.0 - 1.0;
 w *= clamp(dot(normal, centerNormal), 0.0, 1.0);
#endif
#ifdef DEPTHTEX_ENABLED
 float d = getLinearDepth(coord);
 w *= (1.0 - smoothstep(abs(centerDepth - d) / depthRange, 0.0, 1.0));
#endif

 weightAll += w;
 sum += texture2D(ssaoTexture, coord).r * w;
 }

 gl_FragColor = vec4(vec3(sum / weightAll), 1.0);
}

@end
`;G.Z.import(Ca);function pr(e){for(var t=new Uint8Array(e*e*4),i=0,r=new me.Z,n=0;n<e;n++)for(var a=0;a<e;a++)r.set(Math.random()*2-1,Math.random()*2-1,0).normalize(),t[i++]=(r.x*.5+.5)*255,t[i++]=(r.y*.5+.5)*255,t[i++]=0,t[i++]=255;return t}function mr(e){return new W.Z({pixels:pr(e),wrapS:X.Z.REPEAT,wrapT:X.Z.REPEAT,width:e,height:e})}function Pa(e,t,i){var r=new Float32Array(e*3);t=t||0;for(var n=0;n<e;n++){var a=et(n+t,2)*(i?1:2)*Math.PI,o=et(n+t,3)*Math.PI,s=Math.random(),l=Math.cos(a)*Math.sin(o)*s,h=Math.cos(o)*s,u=Math.sin(a)*Math.sin(o)*s;r[n*3]=l,r[n*3+1]=h,r[n*3+2]=u}return r}function Le(e){e=e||{},this._ssaoPass=new fe.Z({fragment:G.Z.source("ecgl.ssao.estimate")}),this._blurPass=new fe.Z({fragment:G.Z.source("ecgl.ssao.blur")}),this._framebuffer=new Se.Z({depthBuffer:!1}),this._ssaoTexture=new W.Z,this._blurTexture=new W.Z,this._blurTexture2=new W.Z,this._depthTex=e.depthTexture,this._normalTex=e.normalTexture,this.setNoiseSize(4),this.setKernelSize(e.kernelSize||12),e.radius!=null&&this.setParameter("radius",e.radius),e.power!=null&&this.setParameter("power",e.power),this._normalTex||(this._ssaoPass.material.disableTexture("normalTex"),this._blurPass.material.disableTexture("normalTex")),this._depthTex||this._blurPass.material.disableTexture("depthTex"),this._blurPass.material.setUniform("normalTex",this._normalTex),this._blurPass.material.setUniform("depthTex",this._depthTex)}Le.prototype.setDepthTexture=function(e){this._depthTex=e},Le.prototype.setNormalTexture=function(e){this._normalTex=e,this._ssaoPass.material[e?"enableTexture":"disableTexture"]("normalTex"),this.setKernelSize(this._kernelSize)},Le.prototype.update=function(e,t,i){var r=e.getWidth(),n=e.getHeight(),a=this._ssaoPass,o=this._blurPass;a.setUniform("kernel",this._kernels[i%this._kernels.length]),a.setUniform("depthTex",this._depthTex),this._normalTex!=null&&a.setUniform("normalTex",this._normalTex),a.setUniform("depthTexSize",[this._depthTex.width,this._depthTex.height]);var s=new ue.Z;ue.Z.transpose(s,t.worldTransform),a.setUniform("projection",t.projectionMatrix.array),a.setUniform("projectionInv",t.invProjectionMatrix.array),a.setUniform("viewInverseTranspose",s.array);var l=this._ssaoTexture,h=this._blurTexture,u=this._blurTexture2;l.width=r/2,l.height=n/2,h.width=r,h.height=n,u.width=r,u.height=n,this._framebuffer.attach(l),this._framebuffer.bind(e),e.gl.clearColor(1,1,1,1),e.gl.clear(e.gl.COLOR_BUFFER_BIT),a.render(e),o.setUniform("textureSize",[r/2,n/2]),o.setUniform("projection",t.projectionMatrix.array),this._framebuffer.attach(h),o.setUniform("direction",0),o.setUniform("ssaoTexture",l),o.render(e),this._framebuffer.attach(u),o.setUniform("textureSize",[r,n]),o.setUniform("direction",1),o.setUniform("ssaoTexture",h),o.render(e),this._framebuffer.unbind(e);var f=e.clearColor;e.gl.clearColor(f[0],f[1],f[2],f[3])},Le.prototype.getTargetTexture=function(){return this._blurTexture2},Le.prototype.setParameter=function(e,t){e==="noiseTexSize"?this.setNoiseSize(t):e==="kernelSize"?this.setKernelSize(t):e==="intensity"?this._ssaoPass.material.set("intensity",t):this._ssaoPass.setUniform(e,t)},Le.prototype.setKernelSize=function(e){this._kernelSize=e,this._ssaoPass.material.define("fragment","KERNEL_SIZE",e),this._kernels=this._kernels||[];for(var t=0;t<30;t++)this._kernels[t]=Pa(e,t*e,!!this._normalTex)},Le.prototype.setNoiseSize=function(e){var t=this._ssaoPass.getUniform("noiseTex");t?(t.data=pr(e),t.width=t.height=e,t.dirty()):(t=mr(e),this._ssaoPass.setUniform("noiseTex",mr(e))),this._ssaoPass.setUniform("noiseTexSize",[e,e])},Le.prototype.dispose=function(e){this._blurTexture.dispose(e),this._ssaoTexture.dispose(e),this._blurTexture2.dispose(e)};var Ma=Le,Ea=A(74208),Na=`@export ecgl.ssr.main

#define SHADER_NAME SSR
#define MAX_ITERATION 20;
#define SAMPLE_PER_FRAME 5;
#define TOTAL_SAMPLES 128;

uniform sampler2D sourceTexture;
uniform sampler2D gBufferTexture1;
uniform sampler2D gBufferTexture2;
uniform sampler2D gBufferTexture3;
uniform samplerCube specularCubemap;
uniform float specularIntensity: 1;

uniform mat4 projection;
uniform mat4 projectionInv;
uniform mat4 toViewSpace;
uniform mat4 toWorldSpace;

uniform float maxRayDistance: 200;

uniform float pixelStride: 16;
uniform float pixelStrideZCutoff: 50; 
uniform float screenEdgeFadeStart: 0.9; 
uniform float eyeFadeStart : 0.2; uniform float eyeFadeEnd: 0.8; 
uniform float minGlossiness: 0.2; uniform float zThicknessThreshold: 1;

uniform float nearZ;
uniform vec2 viewportSize : VIEWPORT_SIZE;

uniform float jitterOffset: 0;

varying vec2 v_Texcoord;

#ifdef DEPTH_DECODE
@import clay.util.decode_float
#endif

#ifdef PHYSICALLY_CORRECT
uniform sampler2D normalDistribution;
uniform float sampleOffset: 0;
uniform vec2 normalDistributionSize;

vec3 transformNormal(vec3 H, vec3 N) {
 vec3 upVector = N.y > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
vec3 importanceSampleNormalGGX(float i, float roughness, vec3 N) {
 float p = fract((i + sampleOffset) / float(TOTAL_SAMPLES));
 vec3 H = texture2D(normalDistribution,vec2(roughness, p)).rgb;
 return transformNormal(H, N);
}
float G_Smith(float g, float ndv, float ndl) {
 float roughness = 1.0 - g;
 float k = roughness * roughness / 2.0;
 float G1V = ndv / (ndv * (1.0 - k) + k);
 float G1L = ndl / (ndl * (1.0 - k) + k);
 return G1L * G1V;
}
vec3 F_Schlick(float ndv, vec3 spec) {
 return spec + (1.0 - spec) * pow(1.0 - ndv, 5.0);
}
#endif

float fetchDepth(sampler2D depthTexture, vec2 uv)
{
 vec4 depthTexel = texture2D(depthTexture, uv);
 return depthTexel.r * 2.0 - 1.0;
}

float linearDepth(float depth)
{
 if (projection[3][3] == 0.0) {
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
 }
 else {
 return (depth - projection[3][2]) / projection[2][2];
 }
}

bool rayIntersectDepth(float rayZNear, float rayZFar, vec2 hitPixel)
{
 if (rayZFar > rayZNear)
 {
 float t = rayZFar; rayZFar = rayZNear; rayZNear = t;
 }
 float cameraZ = linearDepth(fetchDepth(gBufferTexture2, hitPixel));
 return rayZFar <= cameraZ && rayZNear >= cameraZ - zThicknessThreshold;
}


bool traceScreenSpaceRay(
 vec3 rayOrigin, vec3 rayDir, float jitter,
 out vec2 hitPixel, out vec3 hitPoint, out float iterationCount
)
{
 float rayLength = ((rayOrigin.z + rayDir.z * maxRayDistance) > -nearZ)
 ? (-nearZ - rayOrigin.z) / rayDir.z : maxRayDistance;

 vec3 rayEnd = rayOrigin + rayDir * rayLength;

 vec4 H0 = projection * vec4(rayOrigin, 1.0);
 vec4 H1 = projection * vec4(rayEnd, 1.0);

 float k0 = 1.0 / H0.w, k1 = 1.0 / H1.w;

 vec3 Q0 = rayOrigin * k0, Q1 = rayEnd * k1;

 vec2 P0 = (H0.xy * k0 * 0.5 + 0.5) * viewportSize;
 vec2 P1 = (H1.xy * k1 * 0.5 + 0.5) * viewportSize;

 P1 += dot(P1 - P0, P1 - P0) < 0.0001 ? 0.01 : 0.0;
 vec2 delta = P1 - P0;

 bool permute = false;
 if (abs(delta.x) < abs(delta.y)) {
 permute = true;
 delta = delta.yx;
 P0 = P0.yx;
 P1 = P1.yx;
 }
 float stepDir = sign(delta.x);
 float invdx = stepDir / delta.x;

 vec3 dQ = (Q1 - Q0) * invdx;
 float dk = (k1 - k0) * invdx;

 vec2 dP = vec2(stepDir, delta.y * invdx);

 float strideScaler = 1.0 - min(1.0, -rayOrigin.z / pixelStrideZCutoff);
 float pixStride = 1.0 + strideScaler * pixelStride;

 dP *= pixStride; dQ *= pixStride; dk *= pixStride;

 vec4 pqk = vec4(P0, Q0.z, k0);
 vec4 dPQK = vec4(dP, dQ.z, dk);

 pqk += dPQK * jitter;
 float rayZFar = (dPQK.z * 0.5 + pqk.z) / (dPQK.w * 0.5 + pqk.w);
 float rayZNear;

 bool intersect = false;

 vec2 texelSize = 1.0 / viewportSize;

 iterationCount = 0.0;

 for (int i = 0; i < MAX_ITERATION; i++)
 {
 pqk += dPQK;

 rayZNear = rayZFar;
 rayZFar = (dPQK.z * 0.5 + pqk.z) / (dPQK.w * 0.5 + pqk.w);

 hitPixel = permute ? pqk.yx : pqk.xy;
 hitPixel *= texelSize;

 intersect = rayIntersectDepth(rayZNear, rayZFar, hitPixel);

 iterationCount += 1.0;

 dPQK *= 1.2;

 if (intersect) {
 break;
 }
 }

 Q0.xy += dQ.xy * iterationCount;
 Q0.z = pqk.z;
 hitPoint = Q0 / pqk.w;

 return intersect;
}

float calculateAlpha(
 float iterationCount, float reflectivity,
 vec2 hitPixel, vec3 hitPoint, float dist, vec3 rayDir
)
{
 float alpha = clamp(reflectivity, 0.0, 1.0);
 alpha *= 1.0 - (iterationCount / float(MAX_ITERATION));
 vec2 hitPixelNDC = hitPixel * 2.0 - 1.0;
 float maxDimension = min(1.0, max(abs(hitPixelNDC.x), abs(hitPixelNDC.y)));
 alpha *= 1.0 - max(0.0, maxDimension - screenEdgeFadeStart) / (1.0 - screenEdgeFadeStart);

 float _eyeFadeStart = eyeFadeStart;
 float _eyeFadeEnd = eyeFadeEnd;
 if (_eyeFadeStart > _eyeFadeEnd) {
 float tmp = _eyeFadeEnd;
 _eyeFadeEnd = _eyeFadeStart;
 _eyeFadeStart = tmp;
 }

 float eyeDir = clamp(rayDir.z, _eyeFadeStart, _eyeFadeEnd);
 alpha *= 1.0 - (eyeDir - _eyeFadeStart) / (_eyeFadeEnd - _eyeFadeStart);

 alpha *= 1.0 - clamp(dist / maxRayDistance, 0.0, 1.0);

 return alpha;
}

@import clay.util.rand

@import clay.util.rgbm

void main()
{
 vec4 normalAndGloss = texture2D(gBufferTexture1, v_Texcoord);

 if (dot(normalAndGloss.rgb, vec3(1.0)) == 0.0) {
 discard;
 }

 float g = normalAndGloss.a;
#if !defined(PHYSICALLY_CORRECT)
 if (g <= minGlossiness) {
 discard;
 }
#endif

 float reflectivity = (g - minGlossiness) / (1.0 - minGlossiness);

 vec3 N = normalize(normalAndGloss.rgb * 2.0 - 1.0);
 N = normalize((toViewSpace * vec4(N, 0.0)).xyz);

 vec4 projectedPos = vec4(v_Texcoord * 2.0 - 1.0, fetchDepth(gBufferTexture2, v_Texcoord), 1.0);
 vec4 pos = projectionInv * projectedPos;
 vec3 rayOrigin = pos.xyz / pos.w;
 vec3 V = -normalize(rayOrigin);

 float ndv = clamp(dot(N, V), 0.0, 1.0);
 float iterationCount;
 float jitter = rand(fract(v_Texcoord + jitterOffset));

#ifdef PHYSICALLY_CORRECT
 vec4 color = vec4(vec3(0.0), 1.0);
 vec4 albedoMetalness = texture2D(gBufferTexture3, v_Texcoord);
 vec3 albedo = albedoMetalness.rgb;
 float m = albedoMetalness.a;
 vec3 diffuseColor = albedo * (1.0 - m);
 vec3 spec = mix(vec3(0.04), albedo, m);

 float jitter2 = rand(fract(v_Texcoord)) * float(TOTAL_SAMPLES);

 for (int i = 0; i < SAMPLE_PER_FRAME; i++) {
 vec3 H = importanceSampleNormalGGX(float(i) + jitter2, 1.0 - g, N);
 vec3 rayDir = normalize(reflect(-V, H));
#else
 vec3 rayDir = normalize(reflect(-V, N));
#endif
 vec2 hitPixel;
 vec3 hitPoint;

 bool intersect = traceScreenSpaceRay(rayOrigin, rayDir, jitter, hitPixel, hitPoint, iterationCount);

 float dist = distance(rayOrigin, hitPoint);

 vec3 hitNormal = texture2D(gBufferTexture1, hitPixel).rgb * 2.0 - 1.0;
 hitNormal = normalize((toViewSpace * vec4(hitNormal, 0.0)).xyz);
#ifdef PHYSICALLY_CORRECT
 float ndl = clamp(dot(N, rayDir), 0.0, 1.0);
 float vdh = clamp(dot(V, H), 0.0, 1.0);
 float ndh = clamp(dot(N, H), 0.0, 1.0);
 vec3 litTexel = vec3(0.0);
 if (dot(hitNormal, rayDir) < 0.0 && intersect) {
 litTexel = texture2D(sourceTexture, hitPixel).rgb;
 litTexel *= pow(clamp(1.0 - dist / 200.0, 0.0, 1.0), 3.0);

 }
 else {
 #ifdef SPECULARCUBEMAP_ENABLED
 vec3 rayDirW = normalize(toWorldSpace * vec4(rayDir, 0.0)).rgb;
 litTexel = RGBMDecode(textureCubeLodEXT(specularCubemap, rayDirW, 0.0), 8.12).rgb * specularIntensity;
#endif
 }
 color.rgb += ndl * litTexel * (
 F_Schlick(ndl, spec) * G_Smith(g, ndv, ndl) * vdh / (ndh * ndv + 0.001)
 );
 }
 color.rgb /= float(SAMPLE_PER_FRAME);
#else
 #if !defined(SPECULARCUBEMAP_ENABLED)
 if (dot(hitNormal, rayDir) >= 0.0) {
 discard;
 }
 if (!intersect) {
 discard;
 }
#endif
 float alpha = clamp(calculateAlpha(iterationCount, reflectivity, hitPixel, hitPoint, dist, rayDir), 0.0, 1.0);
 vec4 color = texture2D(sourceTexture, hitPixel);
 color.rgb *= alpha;

#ifdef SPECULARCUBEMAP_ENABLED
 vec3 rayDirW = normalize(toWorldSpace * vec4(rayDir, 0.0)).rgb;
 alpha = alpha * (intersect ? 1.0 : 0.0);
 float bias = (1.0 -g) * 5.0;
 color.rgb += (1.0 - alpha)
 * RGBMDecode(textureCubeLodEXT(specularCubemap, rayDirW, bias), 8.12).rgb
 * specularIntensity;
#endif

#endif

 gl_FragColor = encodeHDR(color);
}
@end

@export ecgl.ssr.blur

uniform sampler2D texture;
uniform sampler2D gBufferTexture1;
uniform sampler2D gBufferTexture2;
uniform mat4 projection;
uniform float depthRange : 0.05;

varying vec2 v_Texcoord;

uniform vec2 textureSize;
uniform float blurSize : 1.0;

#ifdef BLEND
 #ifdef SSAOTEX_ENABLED
uniform sampler2D ssaoTex;
 #endif
uniform sampler2D sourceTexture;
#endif

float getLinearDepth(vec2 coord)
{
 float depth = texture2D(gBufferTexture2, coord).r * 2.0 - 1.0;
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
}

@import clay.util.rgbm


void main()
{
 @import clay.compositor.kernel.gaussian_9

 vec4 centerNTexel = texture2D(gBufferTexture1, v_Texcoord);
 float g = centerNTexel.a;
 float maxBlurSize = clamp(1.0 - g, 0.0, 1.0) * blurSize;
#ifdef VERTICAL
 vec2 off = vec2(0.0, maxBlurSize / textureSize.y);
#else
 vec2 off = vec2(maxBlurSize / textureSize.x, 0.0);
#endif

 vec2 coord = v_Texcoord;

 vec4 sum = vec4(0.0);
 float weightAll = 0.0;

 vec3 cN = centerNTexel.rgb * 2.0 - 1.0;
 float cD = getLinearDepth(v_Texcoord);
 for (int i = 0; i < 9; i++) {
 vec2 coord = clamp((float(i) - 4.0) * off + v_Texcoord, vec2(0.0), vec2(1.0));
 float w = gaussianKernel[i]
 * clamp(dot(cN, texture2D(gBufferTexture1, coord).rgb * 2.0 - 1.0), 0.0, 1.0);
 float d = getLinearDepth(coord);
 w *= (1.0 - smoothstep(abs(cD - d) / depthRange, 0.0, 1.0));

 weightAll += w;
 sum += decodeHDR(texture2D(texture, coord)) * w;
 }

#ifdef BLEND
 float aoFactor = 1.0;
 #ifdef SSAOTEX_ENABLED
 aoFactor = texture2D(ssaoTex, v_Texcoord).r;
 #endif
 gl_FragColor = encodeHDR(
 sum / weightAll * aoFactor + decodeHDR(texture2D(sourceTexture, v_Texcoord))
 );
#else
 gl_FragColor = encodeHDR(sum / weightAll);
#endif
}

@end`;G.Z.import(Na);function Ae(e){e=e||{},this._ssrPass=new fe.Z({fragment:G.Z.source("ecgl.ssr.main"),clearColor:[0,0,0,0]}),this._blurPass1=new fe.Z({fragment:G.Z.source("ecgl.ssr.blur"),clearColor:[0,0,0,0]}),this._blurPass2=new fe.Z({fragment:G.Z.source("ecgl.ssr.blur"),clearColor:[0,0,0,0]}),this._blendPass=new fe.Z({fragment:G.Z.source("clay.compositor.blend")}),this._blendPass.material.disableTexturesAll(),this._blendPass.material.enableTexture(["texture1","texture2"]),this._ssrPass.setUniform("gBufferTexture1",e.normalTexture),this._ssrPass.setUniform("gBufferTexture2",e.depthTexture),this._blurPass1.setUniform("gBufferTexture1",e.normalTexture),this._blurPass1.setUniform("gBufferTexture2",e.depthTexture),this._blurPass2.setUniform("gBufferTexture1",e.normalTexture),this._blurPass2.setUniform("gBufferTexture2",e.depthTexture),this._blurPass2.material.define("fragment","VERTICAL"),this._blurPass2.material.define("fragment","BLEND"),this._ssrTexture=new W.Z({type:X.Z.HALF_FLOAT}),this._texture2=new W.Z({type:X.Z.HALF_FLOAT}),this._texture3=new W.Z({type:X.Z.HALF_FLOAT}),this._prevTexture=new W.Z({type:X.Z.HALF_FLOAT}),this._currentTexture=new W.Z({type:X.Z.HALF_FLOAT}),this._frameBuffer=new Se.Z({depthBuffer:!1}),this._normalDistribution=null,this._totalSamples=256,this._samplePerFrame=4,this._ssrPass.material.define("fragment","SAMPLE_PER_FRAME",this._samplePerFrame),this._ssrPass.material.define("fragment","TOTAL_SAMPLES",this._totalSamples),this._downScale=1}Ae.prototype.setAmbientCubemap=function(e,t){this._ssrPass.material.set("specularCubemap",e),this._ssrPass.material.set("specularIntensity",t);var i=e&&t;this._ssrPass.material[i?"enableTexture":"disableTexture"]("specularCubemap")},Ae.prototype.update=function(e,t,i,r){var n=e.getWidth(),a=e.getHeight(),o=this._ssrTexture,s=this._texture2,l=this._texture3;o.width=this._prevTexture.width=this._currentTexture.width=n/this._downScale,o.height=this._prevTexture.height=this._currentTexture.height=a/this._downScale,s.width=l.width=n,s.height=l.height=a;var h=this._frameBuffer,u=this._ssrPass,f=this._blurPass1,c=this._blurPass2,d=this._blendPass,v=new ue.Z,p=new ue.Z;ue.Z.transpose(v,t.worldTransform),ue.Z.transpose(p,t.viewMatrix),u.setUniform("sourceTexture",i),u.setUniform("projection",t.projectionMatrix.array),u.setUniform("projectionInv",t.invProjectionMatrix.array),u.setUniform("toViewSpace",v.array),u.setUniform("toWorldSpace",p.array),u.setUniform("nearZ",t.near);var g=r/this._totalSamples*this._samplePerFrame;if(u.setUniform("jitterOffset",g),u.setUniform("sampleOffset",r*this._samplePerFrame),f.setUniform("textureSize",[o.width,o.height]),c.setUniform("textureSize",[n,a]),c.setUniform("sourceTexture",i),f.setUniform("projection",t.projectionMatrix.array),c.setUniform("projection",t.projectionMatrix.array),h.attach(o),h.bind(e),u.render(e),this._physicallyCorrect&&(h.attach(this._currentTexture),d.setUniform("texture1",this._prevTexture),d.setUniform("texture2",o),d.material.set({weight1:r>=1?.95:0,weight2:r>=1?.05:1}),d.render(e)),h.attach(s),f.setUniform("texture",this._physicallyCorrect?this._currentTexture:o),f.render(e),h.attach(l),c.setUniform("texture",s),c.render(e),h.unbind(e),this._physicallyCorrect){var x=this._prevTexture;this._prevTexture=this._currentTexture,this._currentTexture=x}},Ae.prototype.getTargetTexture=function(){return this._texture3},Ae.prototype.setParameter=function(e,t){e==="maxIteration"?this._ssrPass.material.define("fragment","MAX_ITERATION",t):this._ssrPass.setUniform(e,t)},Ae.prototype.setPhysicallyCorrect=function(e){e?(this._normalDistribution||(this._normalDistribution=Ea.Z.generateNormalDistribution(64,this._totalSamples)),this._ssrPass.material.define("fragment","PHYSICALLY_CORRECT"),this._ssrPass.material.set("normalDistribution",this._normalDistribution),this._ssrPass.material.set("normalDistributionSize",[64,this._totalSamples])):this._ssrPass.material.undefine("fragment","PHYSICALLY_CORRECT"),this._physicallyCorrect=e},Ae.prototype.setSSAOTexture=function(e){var t=this._blurPass2;e?(t.material.enableTexture("ssaoTex"),t.material.set("ssaoTex",e)):t.material.disableTexture("ssaoTex")},Ae.prototype.isFinished=function(e){return this._physicallyCorrect?e>this._totalSamples/this._samplePerFrame:!0},Ae.prototype.dispose=function(e){this._ssrTexture.dispose(e),this._texture2.dispose(e),this._texture3.dispose(e),this._prevTexture.dispose(e),this._currentTexture.dispose(e),this._frameBuffer.dispose(e)};var Oa=Ae,gr=[0,0,-.321585265978,-.154972575841,.458126042375,.188473391593,.842080129861,.527766490688,.147304551086,-.659453822776,-.331943915203,-.940619700594,.0479226680259,.54812163202,.701581552186,-.709825561388,-.295436780218,.940589268233,-.901489676764,.237713156085,.973570876096,-.109899459384,-.866792314779,-.451805525005,.330975007087,.800048655954,-.344275183665,.381779221166,-.386139432542,-.437418421534,-.576478634965,-.0148463392551,.385798197415,-.262426961053,-.666302061145,.682427250835,-.628010632582,-.732836215494,.10163141741,-.987658134403,.711995289051,-.320024291314,.0296005138058,.950296523438,.0130612307608,-.351024443122,-.879596633704,-.10478487883,.435712737232,.504254490347,.779203817497,.206477676721,.388264289969,-.896736162545,-.153106280781,-.629203242522,-.245517550697,.657969239148,.126830499058,.26862328493,-.634888119007,-.302301223431,.617074219636,.779817204925],Ia=`@export ecgl.normal.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

@import ecgl.common.normalMap.vertexHeader

@import ecgl.common.vertexAnimation.header

void main()
{

 @import ecgl.common.vertexAnimation.main

 @import ecgl.common.uv.main

 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

 @import ecgl.common.normalMap.vertexMain

 gl_Position = worldViewProjection * vec4(pos, 1.0);

}


@end


@export ecgl.normal.fragment

#define ROUGHNESS_CHANEL 0

uniform bool useBumpMap;
uniform bool useRoughnessMap;
uniform bool doubleSide;
uniform float roughness;

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform mat4 viewInverse : VIEWINVERSE;

@import ecgl.common.normalMap.fragmentHeader
@import ecgl.common.bumpMap.header

uniform sampler2D roughnessMap;

void main()
{
 vec3 N = v_Normal;
 
 bool flipNormal = false;
 if (doubleSide) {
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 flipNormal = true;
 }
 }

 @import ecgl.common.normalMap.fragmentMain

 if (useBumpMap) {
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 }

 float g = 1.0 - roughness;

 if (useRoughnessMap) {
 float g2 = 1.0 - texture2D(roughnessMap, v_DetailTexcoord)[ROUGHNESS_CHANEL];
 g = clamp(g2 + (g - 0.5) * 2.0, 0.0, 1.0);
 }

 if (flipNormal) {
 N = -N;
 }

 gl_FragColor.rgb = (N.xyz + 1.0) * 0.5;
 gl_FragColor.a = g;
}
@end`;G.Z.import(Ia);function di(e,t,i,r,n){var a=e.gl;t.setUniform(a,"1i",i,n),a.activeTexture(a.TEXTURE0+n),r.isRenderable()?r.bind(e):r.unbind(e)}function Ra(e,t,i,r,n){var a,o,s,l,h=e.gl;return function(u,f,c){if(!(l&&l.material===u.material)){var d=u.material,v=u.__program,p=d.get("roughness");p==null&&(p=1);var g=d.get("normalMap")||t,x=d.get("roughnessMap"),y=d.get("bumpMap"),T=d.get("uvRepeat"),w=d.get("uvOffset"),S=d.get("detailUvRepeat"),b=d.get("detailUvOffset"),L=!!y&&d.isTextureEnabled("bumpMap"),D=!!x&&d.isTextureEnabled("roughnessMap"),P=d.isDefined("fragment","DOUBLE_SIDED");y=y||i,x=x||r,c!==f?(f.set("normalMap",g),f.set("bumpMap",y),f.set("roughnessMap",x),f.set("useBumpMap",L),f.set("useRoughnessMap",D),f.set("doubleSide",P),T!=null&&f.set("uvRepeat",T),w!=null&&f.set("uvOffset",w),S!=null&&f.set("detailUvRepeat",S),b!=null&&f.set("detailUvOffset",b),f.set("roughness",p)):(v.setUniform(h,"1f","roughness",p),a!==g&&di(e,v,"normalMap",g,0),o!==y&&y&&di(e,v,"bumpMap",y,1),s!==x&&x&&di(e,v,"roughnessMap",x,2),T!=null&&v.setUniform(h,"2f","uvRepeat",T),w!=null&&v.setUniform(h,"2f","uvOffset",w),S!=null&&v.setUniform(h,"2f","detailUvRepeat",S),b!=null&&v.setUniform(h,"2f","detailUvOffset",b),v.setUniform(h,"1i","useBumpMap",+L),v.setUniform(h,"1i","useRoughnessMap",+D),v.setUniform(h,"1i","doubleSide",+P)),a=g,o=y,s=x,l=u}}}function tt(e){e=e||{},this._depthTex=new W.Z({format:X.Z.DEPTH_COMPONENT,type:X.Z.UNSIGNED_INT}),this._normalTex=new W.Z({type:X.Z.HALF_FLOAT}),this._framebuffer=new Se.Z,this._framebuffer.attach(this._normalTex),this._framebuffer.attach(this._depthTex,Se.Z.DEPTH_ATTACHMENT),this._normalMaterial=new Be.Z({shader:new G.Z(G.Z.source("ecgl.normal.vertex"),G.Z.source("ecgl.normal.fragment"))}),this._normalMaterial.enableTexture(["normalMap","bumpMap","roughnessMap"]),this._defaultNormalMap=Ke.Z.createBlank("#000"),this._defaultBumpMap=Ke.Z.createBlank("#000"),this._defaultRoughessMap=Ke.Z.createBlank("#000"),this._debugPass=new fe.Z({fragment:G.Z.source("clay.compositor.output")}),this._debugPass.setUniform("texture",this._normalTex),this._debugPass.material.undefine("fragment","OUTPUT_ALPHA")}tt.prototype.getDepthTexture=function(){return this._depthTex},tt.prototype.getNormalTexture=function(){return this._normalTex},tt.prototype.update=function(e,t,i){var r=e.getWidth(),n=e.getHeight(),a=this._depthTex,o=this._normalTex,s=this._normalMaterial;a.width=r,a.height=n,o.width=r,o.height=n;var l=t.getRenderList(i).opaque;this._framebuffer.bind(e),e.gl.clearColor(0,0,0,0),e.gl.clear(e.gl.COLOR_BUFFER_BIT|e.gl.DEPTH_BUFFER_BIT),e.gl.disable(e.gl.BLEND),e.renderPass(l,i,{getMaterial:function(){return s},ifRender:function(h){return h.renderNormal},beforeRender:Ra(e,this._defaultNormalMap,this._defaultBumpMap,this._defaultRoughessMap,this._normalMaterial),sort:e.opaqueSortCompare}),this._framebuffer.unbind(e)},tt.prototype.renderDebug=function(e){this._debugPass.render(e)},tt.prototype.dispose=function(e){this._depthTex.dispose(e),this._normalTex.dispose(e)};var za=tt;function vt(e){e=e||{},this._edgePass=new fe.Z({fragment:G.Z.source("ecgl.edge")}),this._edgePass.setUniform("normalTexture",e.normalTexture),this._edgePass.setUniform("depthTexture",e.depthTexture),this._targetTexture=new W.Z({type:X.Z.HALF_FLOAT}),this._frameBuffer=new Se.Z,this._frameBuffer.attach(this._targetTexture)}vt.prototype.update=function(e,t,i,r){var n=e.getWidth(),a=e.getHeight(),o=this._targetTexture;o.width=n,o.height=a;var s=this._frameBuffer;s.bind(e),this._edgePass.setUniform("projectionInv",t.invProjectionMatrix.array),this._edgePass.setUniform("textureSize",[n,a]),this._edgePass.setUniform("texture",i),this._edgePass.render(e),s.unbind(e)},vt.prototype.getTargetTexture=function(){return this._targetTexture},vt.prototype.setParameter=function(e,t){this._edgePass.setUniform(e,t)},vt.prototype.dispose=function(e){this._targetTexture.dispose(e),this._frameBuffer.dispose(e)};var Ga=vt,Fa={type:"compositor",nodes:[{name:"source",type:"texture",outputs:{color:{}}},{name:"source_half",shader:"#source(clay.compositor.downsample)",inputs:{texture:"source"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"bright",shader:"#source(clay.compositor.bright)",inputs:{texture:"source_half"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{threshold:2,scale:4,textureSize:"expr([width * 1.0 / 2, height / 2])"}},{name:"bright_downsample_4",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 2, height / 2] )"}},{name:"bright_downsample_8",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_4"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 4, height / 4] )"}},{name:"bright_downsample_16",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_8"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 8, height / 8] )"}},{name:"bright_downsample_32",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_16"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 32)",height:"expr(height * 1.0 / 32)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 16, height / 16] )"}},{name:"bright_upsample_16_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_32"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 32, height / 32] )"}},{name:"bright_upsample_16_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_16_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 16, height * 1.0 / 16] )"}},{name:"bright_upsample_8_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_16"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 16, height * 1.0 / 16] )"}},{name:"bright_upsample_8_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_8_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 8, height * 1.0 / 8] )"}},{name:"bright_upsample_8_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_8_blur_v",texture2:"bright_upsample_16_blur_v"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_4_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_8"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 8, height * 1.0 / 8] )"}},{name:"bright_upsample_4_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_4_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 4, height * 1.0 / 4] )"}},{name:"bright_upsample_4_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_4_blur_v",texture2:"bright_upsample_8_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_2_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_4"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 4, height * 1.0 / 4] )"}},{name:"bright_upsample_2_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_2_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 2, height * 1.0 / 2] )"}},{name:"bright_upsample_2_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_2_blur_v",texture2:"bright_upsample_4_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_full_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 2, height * 1.0 / 2] )"}},{name:"bright_upsample_full_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_full_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"bloom_composite",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_full_blur_v",texture2:"bright_upsample_2_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"coc",shader:"#source(ecgl.dof.coc)",outputs:{color:{parameters:{minFilter:"NEAREST",magFilter:"NEAREST",width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},parameters:{focalDist:50,focalRange:30}},{name:"dof_far_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"source",coc:"coc"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"dof_near_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"source",coc:"coc"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"},defines:{BLUR_NEARFIELD:null}},{name:"dof_coc_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"coc"},outputs:{color:{parameters:{minFilter:"NEAREST",magFilter:"NEAREST",width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"},defines:{BLUR_COC:null}},{name:"dof_composite",shader:"#source(ecgl.dof.composite)",inputs:{original:"source",blurred:"dof_far_blur",nearfield:"dof_near_blur",coc:"coc",nearcoc:"dof_coc_blur"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}}},{name:"composite",shader:"#source(clay.compositor.hdr.composite)",inputs:{texture:"source",bloom:"bloom_composite"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},defines:{}},{name:"FXAA",shader:"#source(clay.compositor.fxaa)",inputs:{texture:"composite"}}]},Ba=A(71364),Za=A(69663),Ha=A(71032),Va=A(61430),Ua=A(12045),Wa=A(85747),ka=A(53746),ja=A(34725),Xa=A(14289),Ya=`@export ecgl.dof.coc

uniform sampler2D depth;

uniform float zNear: 0.1;
uniform float zFar: 2000;

uniform float focalDistance: 3;
uniform float focalRange: 1;
uniform float focalLength: 30;
uniform float fstop: 2.8;

varying vec2 v_Texcoord;

@import clay.util.encode_float

void main()
{
 float z = texture2D(depth, v_Texcoord).r * 2.0 - 1.0;

 float dist = 2.0 * zNear * zFar / (zFar + zNear - z * (zFar - zNear));

 float aperture = focalLength / fstop;

 float coc;

 float uppper = focalDistance + focalRange;
 float lower = focalDistance - focalRange;
 if (dist <= uppper && dist >= lower) {
 coc = 0.5;
 }
 else {
 float focalAdjusted = dist > uppper ? uppper : lower;

 coc = abs(aperture * (focalLength * (dist - focalAdjusted)) / (dist * (focalAdjusted - focalLength)));
 coc = clamp(coc, 0.0, 2.0) / 2.00001;

 if (dist < lower) {
 coc = -coc;
 }
 coc = coc * 0.5 + 0.5;
 }

 gl_FragColor = encodeFloat(coc);
}
@end


@export ecgl.dof.composite

#define DEBUG 0

uniform sampler2D original;
uniform sampler2D blurred;
uniform sampler2D nearfield;
uniform sampler2D coc;
uniform sampler2D nearcoc;
varying vec2 v_Texcoord;

@import clay.util.rgbm
@import clay.util.float

void main()
{
 vec4 blurredColor = texture2D(blurred, v_Texcoord);
 vec4 originalColor = texture2D(original, v_Texcoord);

 float fCoc = decodeFloat(texture2D(coc, v_Texcoord));

 fCoc = abs(fCoc * 2.0 - 1.0);

 float weight = smoothstep(0.0, 1.0, fCoc);
 
#ifdef NEARFIELD_ENABLED
 vec4 nearfieldColor = texture2D(nearfield, v_Texcoord);
 float fNearCoc = decodeFloat(texture2D(nearcoc, v_Texcoord));
 fNearCoc = abs(fNearCoc * 2.0 - 1.0);

 gl_FragColor = encodeHDR(
 mix(
 nearfieldColor, mix(originalColor, blurredColor, weight),
 pow(1.0 - fNearCoc, 4.0)
 )
 );
#else
 gl_FragColor = encodeHDR(mix(originalColor, blurredColor, weight));
#endif

}

@end



@export ecgl.dof.diskBlur

#define POISSON_KERNEL_SIZE 16;

uniform sampler2D texture;
uniform sampler2D coc;
varying vec2 v_Texcoord;

uniform float blurRadius : 10.0;
uniform vec2 textureSize : [512.0, 512.0];

uniform vec2 poissonKernel[POISSON_KERNEL_SIZE];

uniform float percent;

float nrand(const in vec2 n) {
 return fract(sin(dot(n.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

@import clay.util.rgbm
@import clay.util.float


void main()
{
 vec2 offset = blurRadius / textureSize;

 float rnd = 6.28318 * nrand(v_Texcoord + 0.07 * percent );
 float cosa = cos(rnd);
 float sina = sin(rnd);
 vec4 basis = vec4(cosa, -sina, sina, cosa);

#if !defined(BLUR_NEARFIELD) && !defined(BLUR_COC)
 offset *= abs(decodeFloat(texture2D(coc, v_Texcoord)) * 2.0 - 1.0);
#endif

#ifdef BLUR_COC
 float cocSum = 0.0;
#else
 vec4 color = vec4(0.0);
#endif


 float weightSum = 0.0;

 for (int i = 0; i < POISSON_KERNEL_SIZE; i++) {
 vec2 ofs = poissonKernel[i];

 ofs = vec2(dot(ofs, basis.xy), dot(ofs, basis.zw));

 vec2 uv = v_Texcoord + ofs * offset;
 vec4 texel = texture2D(texture, uv);

 float w = 1.0;
#ifdef BLUR_COC
 float fCoc = decodeFloat(texel) * 2.0 - 1.0;
 cocSum += clamp(fCoc, -1.0, 0.0) * w;
#else
 texel = texel;
 #if !defined(BLUR_NEARFIELD)
 float fCoc = decodeFloat(texture2D(coc, uv)) * 2.0 - 1.0;
 w *= abs(fCoc);
 #endif
 texel.rgb *= texel.a;
 color += texel * w;
#endif

 weightSum += w;
 }

#ifdef BLUR_COC
 gl_FragColor = encodeFloat(clamp(cocSum / weightSum, -1.0, 0.0) * 0.5 + 0.5);
#else
 color /= weightSum;
 color.rgb /= (color.a + 0.0001);
 gl_FragColor = color;
#endif
}

@end`,Qa=`@export ecgl.edge

uniform sampler2D texture;

uniform sampler2D normalTexture;
uniform sampler2D depthTexture;

uniform mat4 projectionInv;

uniform vec2 textureSize;

uniform vec4 edgeColor: [0,0,0,0.8];

varying vec2 v_Texcoord;

vec3 packColor(vec2 coord) {
 float z = texture2D(depthTexture, coord).r * 2.0 - 1.0;
 vec4 p = vec4(v_Texcoord * 2.0 - 1.0, z, 1.0);
 vec4 p4 = projectionInv * p;

 return vec3(
 texture2D(normalTexture, coord).rg,
 -p4.z / p4.w / 5.0
 );
}

void main() {
 vec2 cc = v_Texcoord;
 vec3 center = packColor(cc);

 float size = clamp(1.0 - (center.z - 10.0) / 100.0, 0.0, 1.0) * 0.5;
 float dx = size / textureSize.x;
 float dy = size / textureSize.y;

 vec2 coord;
 vec3 topLeft = packColor(cc+vec2(-dx, -dy));
 vec3 top = packColor(cc+vec2(0.0, -dy));
 vec3 topRight = packColor(cc+vec2(dx, -dy));
 vec3 left = packColor(cc+vec2(-dx, 0.0));
 vec3 right = packColor(cc+vec2(dx, 0.0));
 vec3 bottomLeft = packColor(cc+vec2(-dx, dy));
 vec3 bottom = packColor(cc+vec2(0.0, dy));
 vec3 bottomRight = packColor(cc+vec2(dx, dy));

 vec3 v = -topLeft-2.0*top-topRight+bottomLeft+2.0*bottom+bottomRight;
 vec3 h = -bottomLeft-2.0*left-topLeft+bottomRight+2.0*right+topRight;

 float edge = sqrt(dot(h, h) + dot(v, v));

 edge = smoothstep(0.8, 1.0, edge);

 gl_FragColor = mix(texture2D(texture, v_Texcoord), vec4(edgeColor.rgb, 1.0), edgeColor.a * edge);
}
@end`;G.Z.import(Ba.Z),G.Z.import(Za.Z),G.Z.import(Ha.Z),G.Z.import(Va.Z),G.Z.import(Ua.Z),G.Z.import(Wa.Z),G.Z.import(ka.Z),G.Z.import(ja.Z),G.Z.import(Xa.Z),G.Z.import(Ya),G.Z.import(Qa);function _r(e,t){return{color:{parameters:{width:e,height:t}}}}var vi=["composite","FXAA"];function Z(){this._width,this._height,this._dpr,this._sourceTexture=new W.Z({type:X.Z.HALF_FLOAT}),this._depthTexture=new W.Z({format:X.Z.DEPTH_COMPONENT,type:X.Z.UNSIGNED_INT}),this._framebuffer=new Se.Z,this._framebuffer.attach(this._sourceTexture),this._framebuffer.attach(this._depthTexture,Se.Z.DEPTH_ATTACHMENT),this._normalPass=new za,this._compositor=(0,La.Z)(Fa);var e=this._compositor.getNodeByName("source");e.texture=this._sourceTexture;var t=this._compositor.getNodeByName("coc");this._sourceNode=e,this._cocNode=t,this._compositeNode=this._compositor.getNodeByName("composite"),this._fxaaNode=this._compositor.getNodeByName("FXAA"),this._dofBlurNodes=["dof_far_blur","dof_near_blur","dof_coc_blur"].map(function(r){return this._compositor.getNodeByName(r)},this),this._dofBlurKernel=0,this._dofBlurKernelSize=new Float32Array(0),this._finalNodesChain=vi.map(function(r){return this._compositor.getNodeByName(r)},this);var i={normalTexture:this._normalPass.getNormalTexture(),depthTexture:this._normalPass.getDepthTexture()};this._ssaoPass=new Ma(i),this._ssrPass=new Oa(i),this._edgePass=new Ga(i)}Z.prototype.resize=function(r,n,i){i=i||1;var r=r*i,n=n*i,a=this._sourceTexture,o=this._depthTexture;a.width=r,a.height=n,o.width=r,o.height=n;var s={getWidth:function(){return r},getHeight:function(){return n},getDevicePixelRatio:function(){return i}};function l(h,u){if(typeof h[u]=="function"){var f=h[u].__original||h[u];h[u]=function(c){return f.call(this,s)},h[u].__original=f}}this._compositor.nodes.forEach(function(h){for(var u in h.outputs){var f=h.outputs[u].parameters;f&&(l(f,"width"),l(f,"height"))}for(var c in h.parameters)l(h.parameters,c)}),this._width=r,this._height=n,this._dpr=i},Z.prototype.getWidth=function(){return this._width},Z.prototype.getHeight=function(){return this._height},Z.prototype._ifRenderNormalPass=function(){return this._enableSSAO||this._enableEdge||this._enableSSR},Z.prototype._getPrevNode=function(e){for(var t=vi.indexOf(e.name)-1,i=this._finalNodesChain[t];i&&!this._compositor.getNodeByName(i.name);)t-=1,i=this._finalNodesChain[t];return i},Z.prototype._getNextNode=function(e){for(var t=vi.indexOf(e.name)+1,i=this._finalNodesChain[t];i&&!this._compositor.getNodeByName(i.name);)t+=1,i=this._finalNodesChain[t];return i},Z.prototype._addChainNode=function(e){var t=this._getPrevNode(e),i=this._getNextNode(e);t&&(e.inputs.texture=t.name,i?(e.outputs=_r(this.getWidth.bind(this),this.getHeight.bind(this)),i.inputs.texture=e.name):e.outputs=null,this._compositor.addNode(e))},Z.prototype._removeChainNode=function(e){var t=this._getPrevNode(e),i=this._getNextNode(e);t&&(i?(t.outputs=_r(this.getWidth.bind(this),this.getHeight.bind(this)),i.inputs.texture=t.name):t.outputs=null,this._compositor.removeNode(e))},Z.prototype.updateNormal=function(e,t,i,r){this._ifRenderNormalPass()&&this._normalPass.update(e,t,i)},Z.prototype.updateSSAO=function(e,t,i,r){this._ssaoPass.update(e,i,r)},Z.prototype.enableSSAO=function(){this._enableSSAO=!0},Z.prototype.disableSSAO=function(){this._enableSSAO=!1},Z.prototype.enableSSR=function(){this._enableSSR=!0},Z.prototype.disableSSR=function(){this._enableSSR=!1},Z.prototype.getSSAOTexture=function(){return this._ssaoPass.getTargetTexture()},Z.prototype.getSourceFrameBuffer=function(){return this._framebuffer},Z.prototype.getSourceTexture=function(){return this._sourceTexture},Z.prototype.disableFXAA=function(){this._removeChainNode(this._fxaaNode)},Z.prototype.enableFXAA=function(){this._addChainNode(this._fxaaNode)},Z.prototype.enableBloom=function(){this._compositeNode.inputs.bloom="bloom_composite",this._compositor.dirty()},Z.prototype.disableBloom=function(){this._compositeNode.inputs.bloom=null,this._compositor.dirty()},Z.prototype.enableDOF=function(){this._compositeNode.inputs.texture="dof_composite",this._compositor.dirty()},Z.prototype.disableDOF=function(){this._compositeNode.inputs.texture="source",this._compositor.dirty()},Z.prototype.enableColorCorrection=function(){this._compositeNode.define("COLOR_CORRECTION"),this._enableColorCorrection=!0},Z.prototype.disableColorCorrection=function(){this._compositeNode.undefine("COLOR_CORRECTION"),this._enableColorCorrection=!1},Z.prototype.enableEdge=function(){this._enableEdge=!0},Z.prototype.disableEdge=function(){this._enableEdge=!1},Z.prototype.setBloomIntensity=function(e){this._compositeNode.setParameter("bloomIntensity",e)},Z.prototype.setSSAOParameter=function(e,t){switch(e){case"quality":var i={low:6,medium:12,high:32,ultra:62}[t]||12;this._ssaoPass.setParameter("kernelSize",i);break;case"radius":this._ssaoPass.setParameter(e,t),this._ssaoPass.setParameter("bias",t/200);break;case"intensity":this._ssaoPass.setParameter(e,t);break;default:}},Z.prototype.setDOFParameter=function(e,t){switch(e){case"focalDistance":case"focalRange":case"fstop":this._cocNode.setParameter(e,t);break;case"blurRadius":for(var i=0;i<this._dofBlurNodes.length;i++)this._dofBlurNodes[i].setParameter("blurRadius",t);break;case"quality":var r={low:4,medium:8,high:16,ultra:32}[t]||8;this._dofBlurKernelSize=r;for(var i=0;i<this._dofBlurNodes.length;i++)this._dofBlurNodes[i].pass.material.define("POISSON_KERNEL_SIZE",r);this._dofBlurKernel=new Float32Array(r*2);break;default:}},Z.prototype.setSSRParameter=function(e,t){if(t!=null)switch(e){case"quality":var i={low:10,medium:15,high:30,ultra:80}[t]||20,r={low:32,medium:16,high:8,ultra:4}[t]||16;this._ssrPass.setParameter("maxIteration",i),this._ssrPass.setParameter("pixelStride",r);break;case"maxRoughness":this._ssrPass.setParameter("minGlossiness",Math.max(Math.min(1-t,1),0));break;case"physical":this.setPhysicallyCorrectSSR(t);break;default:console.warn("Unkown SSR parameter "+e)}},Z.prototype.setPhysicallyCorrectSSR=function(e){this._ssrPass.setPhysicallyCorrect(e)},Z.prototype.setEdgeColor=function(e){var t=m.parseColor(e);this._edgePass.setParameter("edgeColor",t)},Z.prototype.setExposure=function(e){this._compositeNode.setParameter("exposure",Math.pow(2,e))},Z.prototype.setColorLookupTexture=function(e,t){this._compositeNode.pass.material.setTextureImage("lut",this._enableColorCorrection?e:"none",t,{minFilter:m.Texture.NEAREST,magFilter:m.Texture.NEAREST,flipY:!1})},Z.prototype.setColorCorrection=function(e,t){this._compositeNode.setParameter(e,t)},Z.prototype.isSSREnabled=function(){return this._enableSSR},Z.prototype.composite=function(e,t,i,r,n){var a=this._sourceTexture,o=a;this._enableEdge&&(this._edgePass.update(e,i,a,n),a=o=this._edgePass.getTargetTexture()),this._enableSSR&&(this._ssrPass.update(e,i,a,n),o=this._ssrPass.getTargetTexture(),this._ssrPass.setSSAOTexture(this._enableSSAO?this._ssaoPass.getTargetTexture():null)),this._sourceNode.texture=o,this._cocNode.setParameter("depth",this._depthTexture);for(var s=this._dofBlurKernel,l=this._dofBlurKernelSize,h=Math.floor(gr.length/2/l),u=n%h,f=0;f<l*2;f++)s[f]=gr[f+u*l*2];for(var f=0;f<this._dofBlurNodes.length;f++)this._dofBlurNodes[f].setParameter("percent",n/30),this._dofBlurNodes[f].setParameter("poissonKernel",s);this._cocNode.setParameter("zNear",i.near),this._cocNode.setParameter("zFar",i.far),this._compositor.render(e,r)},Z.prototype.dispose=function(e){this._sourceTexture.dispose(e),this._depthTexture.dispose(e),this._framebuffer.dispose(e),this._compositor.dispose(e),this._normalPass.dispose(e),this._ssaoPass.dispose(e)};var Ka=Z;function pi(e){for(var t=[],i=0;i<30;i++)t.push([et(i,2),et(i,3)]);this._haltonSequence=t,this._frame=0,this._sourceTex=new W.Z,this._sourceFb=new Se.Z,this._sourceFb.attach(this._sourceTex),this._prevFrameTex=new W.Z,this._outputTex=new W.Z;var r=this._blendPass=new fe.Z({fragment:G.Z.source("clay.compositor.blend")});r.material.disableTexturesAll(),r.material.enableTexture(["texture1","texture2"]),this._blendFb=new Se.Z({depthBuffer:!1}),this._outputPass=new fe.Z({fragment:G.Z.source("clay.compositor.output"),blendWithPrevious:!0}),this._outputPass.material.define("fragment","OUTPUT_ALPHA"),this._outputPass.material.blend=function(n){n.blendEquationSeparate(n.FUNC_ADD,n.FUNC_ADD),n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA)}}pi.prototype={constructor:pi,jitterProjection:function(e,t){var i=e.viewport,r=i.devicePixelRatio||e.getDevicePixelRatio(),n=i.width*r,a=i.height*r,o=this._haltonSequence[this._frame%this._haltonSequence.length],s=new ue.Z;s.array[12]=(o[0]*2-1)/n,s.array[13]=(o[1]*2-1)/a,ue.Z.mul(t.projectionMatrix,s,t.projectionMatrix),ue.Z.invert(t.invProjectionMatrix,t.projectionMatrix)},resetFrame:function(){this._frame=0},getFrame:function(){return this._frame},getSourceFrameBuffer:function(){return this._sourceFb},getOutputTexture:function(){return this._outputTex},resize:function(e,t){this._prevFrameTex.width=e,this._prevFrameTex.height=t,this._outputTex.width=e,this._outputTex.height=t,this._sourceTex.width=e,this._sourceTex.height=t,this._prevFrameTex.dirty(),this._outputTex.dirty(),this._sourceTex.dirty()},isFinished:function(){return this._frame>=this._haltonSequence.length},render:function(e,t,i){var r=this._blendPass;this._frame===0?(r.setUniform("weight1",0),r.setUniform("weight2",1)):(r.setUniform("weight1",.9),r.setUniform("weight2",.1)),r.setUniform("texture1",this._prevFrameTex),r.setUniform("texture2",t||this._sourceTex),this._blendFb.attach(this._outputTex),this._blendFb.bind(e),r.render(e),this._blendFb.unbind(e),i||(this._outputPass.setUniform("texture",this._outputTex),this._outputPass.render(e));var n=this._prevFrameTex;this._prevFrameTex=this._outputTex,this._outputTex=n,this._frame++},dispose:function(e){this._sourceFb.dispose(e),this._blendFb.dispose(e),this._prevFrameTex.dispose(e),this._outputTex.dispose(e),this._sourceTex.dispose(e),this._outputPass.dispose(e),this._blendPass.dispose(e)}};var $a=pi;function Y(e){e=e||"perspective",this.layer=null,this.scene=new ut.Z,this.rootNode=this.scene,this.viewport={x:0,y:0,width:0,height:0},this.setProjection(e),this._compositor=new Ka,this._temporalSS=new $a,this._shadowMapPass=new Da.Z;for(var t=[],i=0,r=0;r<30;r++){for(var n=[],a=0;a<6;a++)n.push(et(i,2)*4-2),n.push(et(i,3)*4-2),i++;t.push(n)}this._pcfKernels=t,this.scene.on("beforerender",function(o,s,l){this.needsTemporalSS()&&this._temporalSS.jitterProjection(o,l)},this)}Y.prototype.setProjection=function(e){var t=this.camera;t&&t.update(),e==="perspective"?this.camera instanceof Pt.Z||(this.camera=new Pt.Z,t&&this.camera.setLocalTransform(t.localTransform)):this.camera instanceof Mt.Z||(this.camera=new Mt.Z,t&&this.camera.setLocalTransform(t.localTransform)),this.camera.near=.1,this.camera.far=2e3},Y.prototype.setViewport=function(e,t,i,r,n){this.camera instanceof Pt.Z&&(this.camera.aspect=i/r),n=n||1,this.viewport.x=e,this.viewport.y=t,this.viewport.width=i,this.viewport.height=r,this.viewport.devicePixelRatio=n,this._compositor.resize(i*n,r*n),this._temporalSS.resize(i*n,r*n)},Y.prototype.containPoint=function(e,t){var i=this.viewport,r=this.layer.renderer.getHeight();return t=r-t,e>=i.x&&t>=i.y&&e<=i.x+i.width&&t<=i.y+i.height};var xr=new be.Z;Y.prototype.castRay=function(e,t,i){var r=this.layer.renderer,n=r.viewport;return r.viewport=this.viewport,r.screenToNDC(e,t,xr),this.camera.castRay(xr,i),r.viewport=n,i},Y.prototype.prepareRender=function(){this.scene.update(),this.camera.update(),this.scene.updateLights();var e=this.scene.updateRenderList(this.camera);this._needsSortProgressively=!1;for(var t=0;t<e.transparent.length;t++){var i=e.transparent[t],r=i.geometry;r.needsSortVerticesProgressively&&r.needsSortVerticesProgressively()&&(this._needsSortProgressively=!0),r.needsSortTrianglesProgressively&&r.needsSortTrianglesProgressively()&&(this._needsSortProgressively=!0)}this._frame=0,this._temporalSS.resetFrame()},Y.prototype.render=function(e,t){this._doRender(e,t,this._frame),this._frame++},Y.prototype.needsAccumulate=function(){return this.needsTemporalSS()||this._needsSortProgressively},Y.prototype.needsTemporalSS=function(){var e=this._enableTemporalSS;return e==="auto"&&(e=this._enablePostEffect),e},Y.prototype.hasDOF=function(){return this._enableDOF},Y.prototype.isAccumulateFinished=function(){return this.needsTemporalSS()?this._temporalSS.isFinished():this._frame>30},Y.prototype._doRender=function(e,t,i){var r=this.scene,n=this.camera;i=i||0,this._updateTransparent(e,r,n,i),t||(this._shadowMapPass.kernelPCF=this._pcfKernels[0],this._shadowMapPass.render(e,r,n,!0)),this._updateShadowPCFKernel(i);var a=e.clearColor;if(e.gl.clearColor(a[0],a[1],a[2],a[3]),this._enablePostEffect&&(this.needsTemporalSS()&&this._temporalSS.jitterProjection(e,n),this._compositor.updateNormal(e,r,n,this._temporalSS.getFrame())),this._updateSSAO(e,r,n,this._temporalSS.getFrame()),this._enablePostEffect){var o=this._compositor.getSourceFrameBuffer();o.bind(e),e.gl.clear(e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT),e.render(r,n,!0,!0),o.unbind(e),this.needsTemporalSS()&&t?(this._compositor.composite(e,r,n,this._temporalSS.getSourceFrameBuffer(),this._temporalSS.getFrame()),e.setViewport(this.viewport),this._temporalSS.render(e)):(e.setViewport(this.viewport),this._compositor.composite(e,r,n,null,0))}else if(this.needsTemporalSS()&&t){var o=this._temporalSS.getSourceFrameBuffer();o.bind(e),e.saveClear(),e.clearBit=e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT,e.render(r,n,!0,!0),e.restoreClear(),o.unbind(e),e.setViewport(this.viewport),this._temporalSS.render(e)}else e.setViewport(this.viewport),e.render(r,n,!0,!0)},Y.prototype._updateTransparent=function(e,t,i,r){for(var n=new me.Z,a=new ue.Z,o=i.getWorldPosition(),s=t.getRenderList(i).transparent,l=0;l<s.length;l++){var h=s[l],u=h.geometry;ue.Z.invert(a,h.worldTransform),me.Z.transformMat4(n,o,a),u.needsSortTriangles&&u.needsSortTriangles()&&u.doSortTriangles(n,r),u.needsSortVertices&&u.needsSortVertices()&&u.doSortVertices(n,r)}},Y.prototype._updateSSAO=function(e,t,i){var r=this._enableSSAO&&this._enablePostEffect;r&&this._compositor.updateSSAO(e,t,i,this._temporalSS.getFrame());for(var n=t.getRenderList(i),a=0;a<n.opaque.length;a++){var o=n.opaque[a];o.renderNormal&&o.material[r?"enableTexture":"disableTexture"]("ssaoMap"),r&&o.material.set("ssaoMap",this._compositor.getSSAOTexture())}},Y.prototype._updateShadowPCFKernel=function(e){for(var t=this._pcfKernels[e%this._pcfKernels.length],i=this.scene.getRenderList(this.camera),r=i.opaque,n=0;n<r.length;n++)r[n].receiveShadow&&(r[n].material.set("pcfKernel",t),r[n].material.define("fragment","PCF_KERNEL_SIZE",t.length/2))},Y.prototype.dispose=function(e){this._compositor.dispose(e.gl),this._temporalSS.dispose(e.gl),this._shadowMapPass.dispose(e)},Y.prototype.setPostEffect=function(e,t){var i=this._compositor;this._enablePostEffect=e.get("enable");var r=e.getModel("bloom"),n=e.getModel("edge"),a=e.getModel("DOF",e.getModel("depthOfField")),o=e.getModel("SSAO",e.getModel("screenSpaceAmbientOcclusion")),s=e.getModel("SSR",e.getModel("screenSpaceReflection")),l=e.getModel("FXAA"),h=e.getModel("colorCorrection");r.get("enable")?i.enableBloom():i.disableBloom(),a.get("enable")?i.enableDOF():i.disableDOF(),s.get("enable")?i.enableSSR():i.disableSSR(),h.get("enable")?i.enableColorCorrection():i.disableColorCorrection(),n.get("enable")?i.enableEdge():i.disableEdge(),l.get("enable")?i.enableFXAA():i.disableFXAA(),this._enableDOF=a.get("enable"),this._enableSSAO=o.get("enable"),this._enableSSAO?i.enableSSAO():i.disableSSAO(),i.setBloomIntensity(r.get("intensity")),i.setEdgeColor(n.get("color")),i.setColorLookupTexture(h.get("lookupTexture"),t),i.setExposure(h.get("exposure")),["radius","quality","intensity"].forEach(function(u){i.setSSAOParameter(u,o.get(u))}),["quality","maxRoughness","physical"].forEach(function(u){i.setSSRParameter(u,s.get(u))}),["quality","focalDistance","focalRange","blurRadius","fstop"].forEach(function(u){i.setDOFParameter(u,a.get(u))}),["brightness","contrast","saturation"].forEach(function(u){i.setColorCorrection(u,h.get(u))})},Y.prototype.setDOFFocusOnPoint=function(e){if(this._enablePostEffect)return e>this.camera.far||e<this.camera.near?void 0:(this._compositor.setDOFParameter("focalDistance",e),!0)},Y.prototype.setTemporalSuperSampling=function(e){this._enableTemporalSS=e.get("enable")},Y.prototype.isLinearSpace=function(){return this._enablePostEffect},Y.prototype.setRootNode=function(e){if(this.rootNode!==e){for(var t=this.rootNode.children(),i=0;i<t.length;i++)e.add(t[i]);e!==this.scene&&this.scene.add(e),this.rootNode=e}},Y.prototype.add=function(e){this.rootNode.add(e)},Y.prototype.remove=function(e){this.rootNode.remove(e)},Y.prototype.removeAll=function(e){this.rootNode.removeAll(e)},Object.assign(Y.prototype,Ji.Z);var Ee=Y;function Ja(e,t){var i=e.getBoxLayoutParams(),r=(0,kt.ME)(i,{width:t.getWidth(),height:t.getHeight()});r.y=t.getHeight()-r.y-r.height,this.viewGL.setViewport(r.x,r.y,r.width,r.height,t.getDevicePixelRatio());var n=e.get("boxWidth"),a=e.get("boxHeight"),o=e.get("boxDepth");this.getAxis("x").setExtent(-n/2,n/2),this.getAxis("y").setExtent(o/2,-o/2),this.getAxis("z").setExtent(-a/2,a/2),this.size=[n,a,o]}function qa(e,t){var i={};function r(n,a){i[n]=i[n]||[1/0,-1/0],i[n][0]=Math.min(a[0],i[n][0]),i[n][1]=Math.max(a[1],i[n][1])}e.eachSeries(function(n){if(n.coordinateSystem===this){var a=n.getData();["x","y","z"].forEach(function(o){a.mapDimensionsAll(o,!0).forEach(function(s){r(o,a.getDataExtent(s,!0))})})}},this),["xAxis3D","yAxis3D","zAxis3D"].forEach(function(n){e.eachComponent(n,function(a){var o=n.charAt(0),s=a.getReferringComponents("grid3D").models[0],l=s.coordinateSystem;if(l===this){var h=l.getAxis(o);if(!h){var u=_._y.createScale(i[o]||[1/0,-1/0],a);h=new Sa(o,u),h.type=a.get("type");var f=h.type==="category";h.onBand=f&&a.get("boundaryGap"),h.inverse=a.get("inverse"),a.axis=h,h.model=a,h.getLabelModel=function(){return a.getModel("axisLabel",s.getModel("axisLabel"))},h.getTickModel=function(){return a.getModel("axisTick",s.getModel("axisTick"))},l.addAxis(h)}}},this)},this),this.resize(this.model,t)}var eo={dimensions:vr.prototype.dimensions,create:function(e,t){var i=[];e.eachComponent("grid3D",function(a){a.__viewGL=a.__viewGL||new Ee;var o=new vr;o.model=a,o.viewGL=a.__viewGL,a.coordinateSystem=o,i.push(o),o.resize=Ja,o.update=qa});var r=["xAxis3D","yAxis3D","zAxis3D"];function n(a,o){return r.map(function(s){var l=a.getReferringComponents(s).models[0];return l==null&&(l=o.getComponent(s)),l})}return e.eachSeries(function(a){if(a.get("coordinateSystem")==="cartesian3D"){var o=a.getReferringComponents("grid3D").models[0];if(o==null){var s=n(a,e),o=s[0].getCoordSysModel();s.forEach(function(u){var f=u.getCoordSysModel()})}var l=o.coordinateSystem;a.coordinateSystem=l}}),i}},to=eo,yr=_.tF.extend({type:"cartesian3DAxis",axis:null,getCoordSysModel:function(){return this.ecModel.queryComponents({mainType:"grid3D",index:this.option.gridIndex,id:this.option.gridId})[0]}});_._y.mixinAxisModelCommonMethods(yr);var io=yr,wr={show:!0,grid3DIndex:0,inverse:!1,name:"",nameLocation:"middle",nameTextStyle:{fontSize:16},nameGap:20,axisPointer:{},axisLine:{},axisTick:{},axisLabel:{},splitArea:{}},ro=_.D5.merge({boundaryGap:!0,axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"},axisPointer:{label:{show:!1}}},wr),mi=_.D5.merge({boundaryGap:[0,0],splitNumber:5,axisPointer:{label:{}}},wr),no=_.D5.defaults({scale:!0,min:"dataMin",max:"dataMax"},mi),Tr=_.D5.defaults({logBase:10},mi);Tr.scale=!0;var ao={categoryAxis3D:ro,valueAxis3D:mi,timeAxis3D:no,logAxis3D:Tr},oo=A(35867),so=["value","category","time","log"];function lo(e,t,i,r,n){so.forEach(function(a){var o=i.extend({type:t+"Axis3D."+a,__ordinalMeta:null,mergeDefaultAndTheme:function(s,l){var h=l.getTheme();_.D5.merge(s,h.get(a+"Axis3D")),_.D5.merge(s,this.getDefaultOption()),s.type=r(t,s)},optionUpdated:function(){var s=this.option;s.type==="category"&&(this.__ordinalMeta=oo.Z.createByAxisModel(this))},getCategories:function(){if(this.option.type==="category")return this.__ordinalMeta.categories},getOrdinalMeta:function(){return this.__ordinalMeta},defaultOption:_.D5.merge(_.D5.clone(ao[a+"Axis3D"]),n||{},!0)});e.registerComponentModel(o)}),e.registerSubTypeDefaulter(t+"Axis3D",_.D5.curry(r,t))}function ho(e,t){return t.type||(t.data?"category":"value")}function uo(e){e.registerComponentModel(va),e.registerComponentView(ba),e.registerCoordinateSystem("grid3D",to),["x","y","z"].forEach(function(t){lo(e,t,io,ho,{name:t.toUpperCase()});const i=e.ComponentView.extend({type:t+"Axis3D"});e.registerComponentView(i)}),e.registerAction({type:"grid3DChangeCamera",event:"grid3dcamerachanged",update:"series:updateCamera"},function(t,i){i.eachComponent({mainType:"grid3D",query:t},function(r){r.setView(t)})}),e.registerAction({type:"grid3DShowAxisPointer",event:"grid3dshowaxispointer",update:"grid3D:showAxisPointer"},function(t,i){}),e.registerAction({type:"grid3DHideAxisPointer",event:"grid3dhideaxispointer",update:"grid3D:hideAxisPointer"},function(t,i){})}(0,_.D$)(uo);var it={defaultOption:{shading:null,realisticMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},lambertMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},colorMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},hatchingMaterial:{textureTiling:1,textureOffset:0,paperColor:"#fff"}}},br={getFilledRegions:function(e,t){var i=(e||[]).slice(),r;if(typeof t=="string"?(t=_.FU(t),r=t&&t.geoJson):t&&t.features&&(r=t),!r)return[];for(var n={},a=r.features,o=0;o<i.length;o++)n[i[o].name]=i[o];for(var o=0;o<a.length;o++){var s=a[o].properties.name;n[s]||i.push({name:s})}return i},defaultOption:{show:!0,zlevel:-10,map:"",left:0,top:0,width:"100%",height:"100%",boxWidth:100,boxHeight:10,boxDepth:"auto",regionHeight:3,environment:"auto",groundPlane:{show:!1,color:"#aaa"},shading:"lambert",light:{main:{alpha:40,beta:30}},viewControl:{alpha:40,beta:0,distance:100,orthographicSize:60,minAlpha:5,minBeta:-80,maxBeta:80},label:{show:!1,distance:2,textStyle:{fontSize:20,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:4}},itemStyle:{color:"#fff",borderWidth:0,borderColor:"#333"},emphasis:{itemStyle:{color:"#639fc0"},label:{show:!0}}}},rt=_.tF.extend({type:"geo3D",layoutMode:"box",coordinateSystem:null,optionUpdated:function(){var e=this.option;e.regions=this.getFilledRegions(e.regions,e.map);var t=_._y.createDimensions(e.data||[],{coordDimensions:["value"],encodeDefine:this.get("encode"),dimensionsDefine:this.get("dimensions")}),i=new _.aV(t,this);i.initData(e.regions);var r={};i.each(function(n){var a=i.getName(n),o=i.getItemModel(n);r[a]=o}),this._regionModelMap=r,this._data=i},getData:function(){return this._data},getRegionModel:function(e){var t=this.getData().getName(e);return this._regionModelMap[t]||new _.Hn(null,this)},getRegionPolygonCoords:function(e){var t=this.getData().getName(e),i=this.coordinateSystem.getRegion(t);return i?i.geometries:[]},getFormattedLabel:function(e,t){var i=this._data.getName(e),r=this.getRegionModel(e),n=r.get(t==="normal"?["label","formatter"]:["emphasis","label","formatter"]);n==null&&(n=r.get(["label","formatter"]));var a={name:i};if(typeof n=="function")return a.status=t,n(a);if(typeof n=="string"){var o=a.seriesName;return n.replace("{a}",o!=null?o:"")}else return i},defaultOption:{regions:[]}});_.D5.merge(rt.prototype,br),_.D5.merge(rt.prototype,zt),_.D5.merge(rt.prototype,$e),_.D5.merge(rt.prototype,Je),_.D5.merge(rt.prototype,it);var fo=rt,co=Sr;function Sr(e,t,i){i=i||2;var r=t&&t.length,n=r?t[0]*i:e.length,a=Dr(e,0,n,i,!0),o=[];if(!a)return o;var s,l,h,u,f,c,d;if(r&&(a=_o(e,t,a,i)),e.length>80*i){s=h=e[0],l=u=e[1];for(var v=i;v<n;v+=i)f=e[v],c=e[v+1],f<s&&(s=f),c<l&&(l=c),f>h&&(h=f),c>u&&(u=c);d=Math.max(h-s,u-l)}return mt(a,o,i,s,l,d),o}function Dr(e,t,i,r,n){var a,o;if(n===xi(e,t,i,r)>0)for(a=t;a<i;a+=r)o=Cr(a,e[a],e[a+1],o);else for(a=i-r;a>=t;a-=r)o=Cr(a,e[a],e[a+1],o);return o&&ke(o,o.next)&&(_t(o),o=o.next),o}function pt(e,t){if(!e)return e;t||(t=e);var i=e,r;do if(r=!1,!i.steiner&&(ke(i,i.next)||ve(i.prev,i,i.next)===0)){if(_t(i),i=t=i.prev,i===i.next)return null;r=!0}else i=i.next;while(r||i!==t);return t}function mt(e,t,i,r,n,a,o){if(e){!o&&a&&To(e,r,n,a);for(var s=e,l,h;e.prev!==e.next;){if(l=e.prev,h=e.next,a?po(e,r,n,a):vo(e)){t.push(l.i/i),t.push(e.i/i),t.push(h.i/i),_t(e),e=h.next,s=h.next;continue}if(e=h,e===s){o?o===1?(e=mo(e,t,i),mt(e,t,i,r,n,a,2)):o===2&&go(e,t,i,r,n,a):mt(pt(e),t,i,r,n,a,1);break}}}}function vo(e){var t=e.prev,i=e,r=e.next;if(ve(t,i,r)>=0)return!1;for(var n=e.next.next;n!==e.prev;){if(jt(t.x,t.y,i.x,i.y,r.x,r.y,n.x,n.y)&&ve(n.prev,n,n.next)>=0)return!1;n=n.next}return!0}function po(e,t,i,r){var n=e.prev,a=e,o=e.next;if(ve(n,a,o)>=0)return!1;for(var s=n.x<a.x?n.x<o.x?n.x:o.x:a.x<o.x?a.x:o.x,l=n.y<a.y?n.y<o.y?n.y:o.y:a.y<o.y?a.y:o.y,h=n.x>a.x?n.x>o.x?n.x:o.x:a.x>o.x?a.x:o.x,u=n.y>a.y?n.y>o.y?n.y:o.y:a.y>o.y?a.y:o.y,f=gi(s,l,t,i,r),c=gi(h,u,t,i,r),d=e.nextZ;d&&d.z<=c;){if(d!==e.prev&&d!==e.next&&jt(n.x,n.y,a.x,a.y,o.x,o.y,d.x,d.y)&&ve(d.prev,d,d.next)>=0)return!1;d=d.nextZ}for(d=e.prevZ;d&&d.z>=f;){if(d!==e.prev&&d!==e.next&&jt(n.x,n.y,a.x,a.y,o.x,o.y,d.x,d.y)&&ve(d.prev,d,d.next)>=0)return!1;d=d.prevZ}return!0}function mo(e,t,i){var r=e;do{var n=r.prev,a=r.next.next;!ke(n,a)&&Lr(n,r,r.next,a)&&gt(n,a)&&gt(a,n)&&(t.push(n.i/i),t.push(r.i/i),t.push(a.i/i),_t(r),_t(r.next),r=e=a),r=r.next}while(r!==e);return r}function go(e,t,i,r,n,a){var o=e;do{for(var s=o.next.next;s!==o.prev;){if(o.i!==s.i&&Do(o,s)){var l=Ar(o,s);o=pt(o,o.next),l=pt(l,l.next),mt(o,t,i,r,n,a),mt(l,t,i,r,n,a);return}s=s.next}o=o.next}while(o!==e)}function _o(e,t,i,r){var n=[],a,o,s,l,h;for(a=0,o=t.length;a<o;a++)s=t[a]*r,l=a<o-1?t[a+1]*r:e.length,h=Dr(e,s,l,r,!1),h===h.next&&(h.steiner=!0),n.push(So(h));for(n.sort(xo),a=0;a<n.length;a++)yo(n[a],i),i=pt(i,i.next);return i}function xo(e,t){return e.x-t.x}function yo(e,t){if(t=wo(e,t),t){var i=Ar(t,e);pt(i,i.next)}}function wo(e,t){var i=t,r=e.x,n=e.y,a=-1/0,o;do{if(n<=i.y&&n>=i.next.y&&i.next.y!==i.y){var s=i.x+(n-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(s<=r&&s>a){if(a=s,s===r){if(n===i.y)return i;if(n===i.next.y)return i.next}o=i.x<i.next.x?i:i.next}}i=i.next}while(i!==t);if(!o)return null;if(r===a)return o.prev;var l=o,h=o.x,u=o.y,f=1/0,c;for(i=o.next;i!==l;)r>=i.x&&i.x>=h&&r!==i.x&&jt(n<u?r:a,n,h,u,n<u?a:r,n,i.x,i.y)&&(c=Math.abs(n-i.y)/(r-i.x),(c<f||c===f&&i.x>o.x)&&gt(i,e)&&(o=i,f=c)),i=i.next;return o}function To(e,t,i,r){var n=e;do n.z===null&&(n.z=gi(n.x,n.y,t,i,r)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==e);n.prevZ.nextZ=null,n.prevZ=null,bo(n)}function bo(e){var t,i,r,n,a,o,s,l,h=1;do{for(i=e,e=null,a=null,o=0;i;){for(o++,r=i,s=0,t=0;t<h&&(s++,r=r.nextZ,!!r);t++);for(l=h;s>0||l>0&&r;)s!==0&&(l===0||!r||i.z<=r.z)?(n=i,i=i.nextZ,s--):(n=r,r=r.nextZ,l--),a?a.nextZ=n:e=n,n.prevZ=a,a=n;i=r}a.nextZ=null,h*=2}while(o>1);return e}function gi(e,t,i,r,n){return e=32767*(e-i)/n,t=32767*(t-r)/n,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function So(e){var t=e,i=e;do t.x<i.x&&(i=t),t=t.next;while(t!==e);return i}function jt(e,t,i,r,n,a,o,s){return(n-o)*(t-s)-(e-o)*(a-s)>=0&&(e-o)*(r-s)-(i-o)*(t-s)>=0&&(i-o)*(a-s)-(n-o)*(r-s)>=0}function Do(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Lo(e,t)&&gt(e,t)&&gt(t,e)&&Ao(e,t)}function ve(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function ke(e,t){return e.x===t.x&&e.y===t.y}function Lr(e,t,i,r){return ke(e,t)&&ke(i,r)||ke(e,r)&&ke(i,t)?!0:ve(e,t,i)>0!=ve(e,t,r)>0&&ve(i,r,e)>0!=ve(i,r,t)>0}function Lo(e,t){var i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&Lr(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function gt(e,t){return ve(e.prev,e,e.next)<0?ve(e,t,e.next)>=0&&ve(e,e.prev,t)>=0:ve(e,t,e.prev)<0||ve(e,e.next,t)<0}function Ao(e,t){var i=e,r=!1,n=(e.x+t.x)/2,a=(e.y+t.y)/2;do i.y>a!=i.next.y>a&&i.next.y!==i.y&&n<(i.next.x-i.x)*(a-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==e);return r}function Ar(e,t){var i=new _i(e.i,e.x,e.y),r=new _i(t.i,t.x,t.y),n=e.next,a=t.prev;return e.next=t,t.prev=e,i.next=n,n.prev=i,r.next=i,i.prev=r,a.next=r,r.prev=a,r}function Cr(e,t,i,r){var n=new _i(e,t,i);return r?(n.next=r.next,n.prev=r,r.next.prev=n,r.next=n):(n.prev=n,n.next=n),n}function _t(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function _i(e,t,i){this.i=e,this.x=t,this.y=i,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}Sr.deviation=function(e,t,i,r){var n=t&&t.length,a=n?t[0]*i:e.length,o=Math.abs(xi(e,0,a,i));if(n)for(var s=0,l=t.length;s<l;s++){var h=t[s]*i,u=s<l-1?t[s+1]*i:e.length;o-=Math.abs(xi(e,h,u,i))}var f=0;for(s=0;s<r.length;s+=3){var c=r[s]*i,d=r[s+1]*i,v=r[s+2]*i;f+=Math.abs((e[c]-e[v])*(e[d+1]-e[c+1])-(e[c]-e[d])*(e[v+1]-e[c+1]))}return o===0&&f===0?0:Math.abs((f-o)/o)};function xi(e,t,i,r){for(var n=0,a=t,o=i-r;a<i;a+=r)n+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return n}function yi(e,t,i){var r=e[t];e[t]=e[i],e[i]=r}function Pr(e,t,i,r,n){var a=i,o=e[t];yi(e,t,r);for(var s=i;s<r;s++)n(e[s],o)<0&&(yi(e,s,a),a++);return yi(e,r,a),a}function Xt(e,t,i,r){if(i<r){var n=Math.floor((i+r)/2),a=Pr(e,n,i,r,t);Xt(e,t,i,a-1),Xt(e,t,a+1,r)}}function wi(){this._parts=[]}wi.prototype.step=function(e,t,i){var r=e.length;if(i===0){this._parts=[],this._sorted=!1;var n=Math.floor(r/2);this._parts.push({pivot:n,left:0,right:r-1}),this._currentSortPartIdx=0}if(!this._sorted){var a=this._parts;if(a.length===0)return this._sorted=!0,!0;if(a.length<512){for(var o=0;o<a.length;o++)a[o].pivot=Pr(e,a[o].pivot,a[o].left,a[o].right,t);for(var s=[],o=0;o<a.length;o++){var l=a[o].left,h=a[o].pivot-1;h>l&&s.push({pivot:Math.floor((h+l)/2),left:l,right:h});var l=a[o].pivot+1,h=a[o].right;h>l&&s.push({pivot:Math.floor((h+l)/2),left:l,right:h})}a=this._parts=s}else for(var o=0;o<Math.floor(a.length/10);o++){var u=a.length-1-this._currentSortPartIdx;if(Xt(e,t,a[u].left,a[u].right),this._currentSortPartIdx++,this._currentSortPartIdx===a.length)return this._sorted=!0,!0}return!1}},wi.sort=Xt;var Yt=wi,nt=$.Z.vec3,Mr=nt.create(),Er=nt.create(),Nr=nt.create(),Ti={needsSortTriangles:function(){return this.indices&&this.sortTriangles},needsSortTrianglesProgressively:function(){return this.needsSortTriangles()&&this.triangleCount>=2e4},doSortTriangles:function(e,t){var i=this.indices;if(t===0){var r=this.attributes.position,e=e.array;(!this._triangleZList||this._triangleZList.length!==this.triangleCount)&&(this._triangleZList=new Float32Array(this.triangleCount),this._sortedTriangleIndices=new Uint32Array(this.triangleCount),this._indicesTmp=new i.constructor(i.length),this._triangleZListTmp=new Float32Array(this.triangleCount));for(var n=0,a,o=0;o<i.length;){r.get(i[o++],Mr),r.get(i[o++],Er),r.get(i[o++],Nr);var s=nt.sqrDist(Mr,e),l=nt.sqrDist(Er,e),h=nt.sqrDist(Nr,e),u=Math.min(s,l);u=Math.min(u,h),o===3?(a=u,u=0):u=u-a,this._triangleZList[n++]=u}}for(var f=this._sortedTriangleIndices,o=0;o<f.length;o++)f[o]=o;if(this.triangleCount<2e4)t===0&&this._simpleSort(!0);else for(var o=0;o<3;o++)this._progressiveQuickSort(t*3+o);for(var c=this._indicesTmp,d=this._triangleZListTmp,v=this._triangleZList,o=0;o<this.triangleCount;o++){var p=f[o]*3,g=o*3;c[g++]=i[p++],c[g++]=i[p++],c[g]=i[p],d[o]=v[f[o]]}var x=this._indicesTmp;this._indicesTmp=this.indices,this.indices=x;var x=this._triangleZListTmp;this._triangleZListTmp=this._triangleZList,this._triangleZList=x,this.dirtyIndices()},_simpleSort:function(e){var t=this._triangleZList,i=this._sortedTriangleIndices;function r(n,a){return t[a]-t[n]}e?Array.prototype.sort.call(i,r):Yt.sort(i,r,0,i.length-1)},_progressiveQuickSort:function(e){var t=this._triangleZList,i=this._sortedTriangleIndices;this._quickSort=this._quickSort||new Yt,this._quickSort.step(i,function(r,n){return t[n]-t[r]},e)}};function Co(e){const t=e.getVisual("style");if(t){const i=e.getVisual("drawType");return t[i]}}function Po(e){return e.getVisual("style").opacity}function ne(e,t){const i=e.getItemVisual(t,"style");if(i){const r=e.getVisual("drawType");return i[r]}}function ae(e,t){const i=e.getItemVisual(t,"style");return i&&i.opacity}var Or=1,Ir=2;function je(e,t,i){this._labelsMesh=new ui,this._labelTextureSurface=new si({width:512,height:512,devicePixelRatio:i.getDevicePixelRatio(),onupdate:function(){i.getZr().refresh()}}),this._api=i,this._labelsMesh.material.set("textureAtlas",this._labelTextureSurface.getTexture())}je.prototype.getLabelPosition=function(e,t,i){return[0,0,0]},je.prototype.getLabelDistance=function(e,t,i){return 0},je.prototype.getMesh=function(){return this._labelsMesh},je.prototype.updateData=function(e,t,i){t==null&&(t=0),i==null&&(i=e.count()),(!this._labelsVisibilitiesBits||this._labelsVisibilitiesBits.length!==i-t)&&(this._labelsVisibilitiesBits=new Uint8Array(i-t));for(var r=["label","show"],n=["emphasis","label","show"],a=t;a<i;a++){var o=e.getItemModel(a),s=o.get(r),l=o.get(n);l==null&&(l=s);var h=(s?Or:0)|(l?Ir:0);this._labelsVisibilitiesBits[a-t]=h}this._start=t,this._end=i,this._data=e},je.prototype.updateLabels=function(e){if(this._data){e=e||[];for(var t=e.length>0,i={},r=0;r<e.length;r++)i[e[r]]=!0;this._labelsMesh.geometry.convertToDynamicArray(!0),this._labelTextureSurface.clear();for(var n=["label"],a=["emphasis","label"],o=this._data.hostModel,s=this._data,l=o.getModel(n),h=o.getModel(a,l),u={left:"right",right:"left",top:"center",bottom:"center"},f={left:"middle",right:"middle",top:"bottom",bottom:"top"},c=this._start;c<this._end;c++){var d=!1;t&&i[c]&&(d=!0);var v=this._labelsVisibilitiesBits[c-this._start]&(d?Ir:Or);if(v){var p=s.getItemModel(c),g=p.getModel(d?a:n,d?h:l),x=g.get("distance")||0,y=g.get("position"),T=this._api.getDevicePixelRatio(),w=o.getFormattedLabel(c,d?"emphasis":"normal");if(w==null||w==="")return;var S=new _.Q.xv({style:(0,Ft.Lr)(g,{text:w,fill:g.get("color")||ne(s,c)||"#000",align:"left",verticalAlign:"top",opacity:B.firstNotNull(g.get("opacity"),ae(s,c),1)})}),b=S.getBoundingRect(),L=1.2;b.height*=L;var D=this._labelTextureSurface.add(S),P=u[y]||"center",M=f[y]||"bottom";this._labelsMesh.geometry.addSprite(this.getLabelPosition(c,y,x),[b.width*T,b.height*T],D,P,M,this.getLabelDistance(c,y,x)*T)}}this._labelsMesh.material.set("uvScale",this._labelTextureSurface.getCoordsScale()),this._labelTextureSurface.getZr().refreshImmediately(),this._labelsMesh.geometry.convertToTypedArray(),this._labelsMesh.geometry.dirty()}},je.prototype.dispose=function(){this._labelTextureSurface.dispose()};var bi=je,ge=$.Z.vec3;m.Shader.import(Vt);function Si(e){this.rootNode=new m.Node,this._triangulationResults={},this._shadersMap=m.COMMON_SHADERS.filter(function(i){return i!=="shadow"}).reduce(function(i,r){return i[r]=m.createShader("ecgl."+r),i},{}),this._linesShader=m.createShader("ecgl.meshLines3D");var t={};m.COMMON_SHADERS.forEach(function(i){t[i]=new m.Material({shader:m.createShader("ecgl."+i)})}),this._groundMaterials=t,this._groundMesh=new m.Mesh({geometry:new m.PlaneGeometry({dynamic:!0}),castShadow:!1,renderNormal:!0,$ignorePicking:!0}),this._groundMesh.rotation.rotateX(-Math.PI/2),this._labelsBuilder=new bi(512,512,e),this._labelsBuilder.getMesh().renderOrder=100,this._labelsBuilder.getMesh().material.depthTest=!1,this.rootNode.add(this._labelsBuilder.getMesh()),this._initMeshes(),this._api=e}Si.prototype={constructor:Si,extrudeY:!0,update:function(e,t,i,r,n){var a=e.getData();r==null&&(r=0),n==null&&(n=a.count()),this._startIndex=r,this._endIndex=n-1,this._triangulation(e,r,n);var o=this._getShader(e.get("shading"));this._prepareMesh(e,o,i,r,n),this.rootNode.updateWorldTransform(),this._updateRegionMesh(e,i,r,n);var s=e.coordinateSystem;s.type==="geo3D"&&this._updateGroundPlane(e,s,i);var l=this;this._labelsBuilder.updateData(a,r,n),this._labelsBuilder.getLabelPosition=function(h,u,f){var c=a.getName(h),d,v=f;if(s.type==="geo3D"){var p=s.getRegion(c);if(!p)return[NaN,NaN,NaN];d=p.getCenter();var g=s.dataToPoint([d[0],d[1],v]);return g}else var x=l._triangulationResults[h-l._startIndex],d=l.extrudeY?[(x.max[0]+x.min[0])/2,x.max[1]+v,(x.max[2]+x.min[2])/2]:[(x.max[0]+x.min[0])/2,(x.max[1]+x.min[1])/2,x.max[2]+v]},this._data=a,this._labelsBuilder.updateLabels(),this._updateDebugWireframe(e),this._lastHoverDataIndex=0},_initMeshes:function(){var e=this;function t(){var n=new m.Mesh({name:"Polygon",material:new m.Material({shader:e._shadersMap.lambert}),geometry:new m.Geometry({sortTriangles:!0,dynamic:!0}),culling:!1,ignorePicking:!0,renderNormal:!0});return Object.assign(n.geometry,Ti),n}var i=t(),r=new m.Mesh({material:new m.Material({shader:this._linesShader}),castShadow:!1,ignorePicking:!0,$ignorePicking:!0,geometry:new Ze({useNativeLine:!1})});this.rootNode.add(i),this.rootNode.add(r),i.material.define("both","VERTEX_COLOR"),i.material.define("fragment","DOUBLE_SIDED"),this._polygonMesh=i,this._linesMesh=r,this.rootNode.add(this._groundMesh)},_getShader:function(e){var t=this._shadersMap[e];return t||(t=this._shadersMap.lambert),t.__shading=e,t},_prepareMesh:function(e,t,i,r,n){for(var a=0,o=0,s=0,l=0,h=r;h<n;h++){var u=this._getRegionPolygonInfo(h),f=this._getRegionLinesInfo(h,e,this._linesMesh.geometry);a+=u.vertexCount,o+=u.triangleCount,s+=f.vertexCount,l+=f.triangleCount}var c=this._polygonMesh,d=c.geometry;["position","normal","texcoord0","color"].forEach(function(v){d.attributes[v].init(a)}),d.indices=a>65535?new Uint32Array(o*3):new Uint16Array(o*3),c.material.shader!==t&&c.material.attachShader(t,!0),m.setMaterialFromModel(t.__shading,c.material,e,i),s>0&&(this._linesMesh.geometry.resetOffset(),this._linesMesh.geometry.setVertexCount(s),this._linesMesh.geometry.setTriangleCount(l)),this._dataIndexOfVertex=new Uint32Array(a),this._vertexRangeOfDataIndex=new Uint32Array((n-r)*2)},_updateRegionMesh:function(e,t,i,r){for(var n=e.getData(),a=0,o=0,s=!1,b=this._polygonMesh,l=this._linesMesh,h=i;h<r;h++){var u=e.getRegionModel(h),f=u.getModel("itemStyle"),c=B.firstNotNull(ne(n,h),f.get("color"),"#fff"),d=B.firstNotNull(ae(n,h),f.get("opacity"),1),v=m.parseColor(c),p=m.parseColor(f.get("borderColor"));v[3]*=d,p[3]*=d;var g=v[3]<.99;b.material.set("color",[1,1,1,1]),s=s||g;for(var x=B.firstNotNull(u.get("height",!0),e.get("regionHeight")),y=this._updatePolygonGeometry(e,b.geometry,h,x,a,o,v),T=a;T<y.vertexOffset;T++)this._dataIndexOfVertex[T]=h;this._vertexRangeOfDataIndex[(h-i)*2]=a,this._vertexRangeOfDataIndex[(h-i)*2+1]=y.vertexOffset,a=y.vertexOffset,o=y.triangleOffset;var w=f.get("borderWidth"),S=w>0;S&&(w*=t.getDevicePixelRatio(),this._updateLinesGeometry(l.geometry,e,h,x,w,e.coordinateSystem.transform)),l.invisible=!S,l.material.set({color:p})}var b=this._polygonMesh;b.material.transparent=s,b.material.depthMask=!s,b.geometry.updateBoundingBox(),b.frontFace=this.extrudeY?m.Mesh.CCW:m.Mesh.CW,b.material.get("normalMap")&&b.geometry.generateTangents(),b.seriesIndex=e.seriesIndex,b.on("mousemove",this._onmousemove,this),b.on("mouseout",this._onmouseout,this)},_updateDebugWireframe:function(e){var t=e.getModel("debug.wireframe");if(t.get("show")){var i=m.parseColor(t.get("lineStyle.color")||"rgba(0,0,0,0.5)"),r=B.firstNotNull(t.get("lineStyle.width"),1),n=this._polygonMesh;n.geometry.generateBarycentric(),n.material.define("both","WIREFRAME_TRIANGLE"),n.material.set("wireframeLineColor",i),n.material.set("wireframeLineWidth",r)}},_onmousemove:function(e){var t=this._dataIndexOfVertex[e.triangle[0]];t==null&&(t=-1),t!==this._lastHoverDataIndex&&(this.downplay(this._lastHoverDataIndex),this.highlight(t),this._labelsBuilder.updateLabels([t])),this._lastHoverDataIndex=t,this._polygonMesh.dataIndex=t},_onmouseout:function(e){e.target&&(this.downplay(this._lastHoverDataIndex),this._lastHoverDataIndex=-1,this._polygonMesh.dataIndex=-1),this._labelsBuilder.updateLabels([])},_updateGroundPlane:function(e,t,i){var r=e.getModel("groundPlane",e);if(this._groundMesh.invisible=!r.get("show",!0),!this._groundMesh.invisible){var n=e.get("shading"),a=this._groundMaterials[n];a||(a=this._groundMaterials.lambert),m.setMaterialFromModel(n,a,r,i),a.get("normalMap")&&this._groundMesh.geometry.generateTangents(),this._groundMesh.material=a,this._groundMesh.material.set("color",m.parseColor(r.get("color"))),this._groundMesh.scale.set(t.size[0],t.size[2],1)}},_triangulation:function(e,t,i){this._triangulationResults=[];for(var r=[1/0,1/0,1/0],n=[-1/0,-1/0,-1/0],a=e.coordinateSystem,o=t;o<i;o++){for(var s=[],l=e.getRegionPolygonCoords(o),h=0;h<l.length;h++){var u=l[h].exterior,f=l[h].interiors,c=[],d=[];if(!(u.length<3)){for(var v=0,p=0;p<u.length;p++){var g=u[p];c[v++]=g[0],c[v++]=g[1]}for(var p=0;p<f.length;p++)if(!(f[p].length<3)){for(var x=c.length/2,y=0;y<f[p].length;y++){var g=f[p][y];c.push(g[0]),c.push(g[1])}d.push(x)}for(var T=co(c,d),w=new Float64Array(c.length/2*3),S=[],b=[1/0,1/0,1/0],L=[-1/0,-1/0,-1/0],D=0,p=0;p<c.length;)ge.set(S,c[p++],0,c[p++]),a&&a.transform&&ge.transformMat4(S,S,a.transform),ge.min(b,b,S),ge.max(L,L,S),w[D++]=S[0],w[D++]=S[1],w[D++]=S[2];ge.min(r,r,b),ge.max(n,n,L),s.push({points:w,indices:T,min:b,max:L})}}this._triangulationResults.push(s)}this._geoBoundingBox=[r,n]},_getRegionPolygonInfo:function(e){for(var t=this._triangulationResults[e-this._startIndex],i=0,r=0,n=0;n<t.length;n++)i+=t[n].points.length/3,r+=t[n].indices.length/3;var a=i*2+i*4,o=r*2+i*2;return{vertexCount:a,triangleCount:o}},_updatePolygonGeometry:function(e,t,i,r,n,a,o){var s=e.get("projectUVOnGround"),l=t.attributes.position,h=t.attributes.normal,u=t.attributes.texcoord0,f=t.attributes.color,c=this._triangulationResults[i-this._startIndex],d=f.value&&o,v=t.indices,p=this.extrudeY?1:2,g=this.extrudeY?2:1,x=[this.rootNode.worldTransform.x.len(),this.rootNode.worldTransform.y.len(),this.rootNode.worldTransform.z.len()],y=ge.mul([],this._geoBoundingBox[0],x),T=ge.mul([],this._geoBoundingBox[1],x),w=Math.max(T[0]-y[0],T[2]-y[2]);function S(pe,ye,oe){for(var se=pe.points,Ct=se.length,re=[],De=[],de=0;de<Ct;de+=3)re[0]=se[de],re[p]=ye,re[g]=se[de+2],De[0]=(se[de]*x[0]-y[0])/w,De[1]=(se[de+2]*x[g]-y[2])/w,l.set(n,re),d&&f.set(n,o),u.set(n++,De)}function b(pe,ye,oe){var se=n;S(pe,ye,oe);for(var Ct=pe.indices.length,re=0;re<Ct;re++)v[a*3+re]=pe.indices[re]+se;a+=pe.indices.length/3}for(var L=this.extrudeY?[0,1,0]:[0,0,1],D=ge.negate([],L),P=0;P<c.length;P++){var M=n,E=c[P];b(E,0,0),b(E,r,0);for(var N=E.points.length/3,F=0;F<N;F++)h.set(M+F,D),h.set(M+F+N,L);for(var O=[0,3,1,1,3,2],z=[[],[],[],[]],V=[],U=[],C=[],J=[],I=0,F=0;F<N;F++){for(var ie=(F+1)%N,K=(E.points[ie*3]-E.points[F*3])*x[0],ce=(E.points[ie*3+2]-E.points[F*3+2])*x[g],he=Math.sqrt(K*K+ce*ce),k=0;k<4;k++){var Me=k===0||k===3,q=(Me?F:ie)*3;z[k][0]=E.points[q],z[k][p]=k>1?r:0,z[k][g]=E.points[q+2],l.set(n+k,z[k]),s?(J[0]=(E.points[q]*x[0]-y[0])/w,J[1]=(E.points[q+2]*x[g]-y[g])/w):(J[0]=(Me?I:I+he)/w,J[1]=(z[k][p]*x[p]-y[p])/w),u.set(n+k,J)}ge.sub(V,z[1],z[0]),ge.sub(U,z[3],z[0]),ge.cross(C,V,U),ge.normalize(C,C);for(var k=0;k<4;k++)h.set(n+k,C),d&&f.set(n+k,o);for(var k=0;k<6;k++)v[a*3+k]=O[k]+n;n+=4,a+=2,I+=he}}return t.dirty(),{vertexOffset:n,triangleOffset:a}},_getRegionLinesInfo:function(e,t,i){var r=0,n=0,a=t.getRegionModel(e),o=a.getModel("itemStyle"),s=o.get("borderWidth");if(s>0){var l=t.getRegionPolygonCoords(e);l.forEach(function(h){var u=h.exterior,f=h.interiors;r+=i.getPolylineVertexCount(u),n+=i.getPolylineTriangleCount(u);for(var c=0;c<f.length;c++)r+=i.getPolylineVertexCount(f[c]),n+=i.getPolylineTriangleCount(f[c])},this)}return{vertexCount:r,triangleCount:n}},_updateLinesGeometry:function(e,t,i,r,n,a){function o(h){for(var u=new Float64Array(h.length*3),f=0,c=[],d=0;d<h.length;d++)c[0]=h[d][0],c[1]=r+.1,c[2]=h[d][1],a&&ge.transformMat4(c,c,a),u[f++]=c[0],u[f++]=c[1],u[f++]=c[2];return u}var s=[1,1,1,1],l=t.getRegionPolygonCoords(i);l.forEach(function(h){var u=h.exterior,f=h.interiors;e.addPolyline(o(u),s,n);for(var c=0;c<f.length;c++)e.addPolyline(o(f[c]),s,n)})},highlight:function(e){var t=this._data;if(t){var i=t.getItemModel(e),r=i.getModel(["emphasis","itemStyle"]),n=r.get("color"),a=B.firstNotNull(r.get("opacity"),ae(t,e),1);if(n==null){var o=ne(t,e);n=_.$_.lift(o,-.4)}a==null&&(a=ae(t,e));var s=m.parseColor(n);s[3]*=a,this._setColorOfDataIndex(t,e,s)}},downplay:function(e){var t=this._data;if(t){var i=t.getItemModel(e),r=B.firstNotNull(ne(t,e),i.get(["itemStyle","color"]),"#fff"),n=B.firstNotNull(ae(t,e),i.get(["itemStyle","opacity"]),1),a=m.parseColor(r);a[3]*=n,this._setColorOfDataIndex(t,e,a)}},dispose:function(){this._labelsBuilder.dispose()},_setColorOfDataIndex:function(e,t,i){if(!(t<this._startIndex&&t>this._endIndex)){t-=this._startIndex;for(var r=this._vertexRangeOfDataIndex[t*2];r<this._vertexRangeOfDataIndex[t*2+1];r++)this._polygonMesh.geometry.attributes.color.set(r,i);this._polygonMesh.geometry.dirty(),this._api.getZr().refresh()}}};var Qt=Si,Mo=_.Ir.extend({type:"geo3D",__ecgl__:!0,init:function(e,t){this._geo3DBuilder=new Qt(t),this.groupGL=new m.Node,this._lightRoot=new m.Node,this._sceneHelper=new qe(this._lightRoot),this._sceneHelper.initLight(this._lightRoot),this._control=new Bt({zr:t.getZr()}),this._control.init()},render:function(e,t,i){this.groupGL.add(this._geo3DBuilder.rootNode);var r=e.coordinateSystem;if(!(!r||!r.viewGL)){r.viewGL.add(this._lightRoot),e.get("show")?r.viewGL.add(this.groupGL):r.viewGL.remove(this.groupGL);var n=this._control;n.setViewGL(r.viewGL);var a=e.getModel("viewControl");n.setFromViewControlModel(a,0),this._sceneHelper.setScene(r.viewGL.scene),this._sceneHelper.updateLight(e),r.viewGL.setPostEffect(e.getModel("postEffect"),i),r.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._geo3DBuilder.update(e,t,i,0,e.getData().count());var o=r.viewGL.isLinearSpace()?"define":"undefine";this._geo3DBuilder.rootNode.traverse(function(s){s.material&&s.material[o]("fragment","SRGB_DECODE")}),n.off("update"),n.on("update",function(){i.dispatchAction({type:"geo3DChangeCamera",alpha:n.getAlpha(),beta:n.getBeta(),distance:n.getDistance(),center:n.getCenter(),from:this.uid,geo3DId:e.id})}),n.update()}},afterRender:function(e,t,i,r){var n=r.renderer;this._sceneHelper.updateAmbientCubemap(n,e,i),this._sceneHelper.updateSkybox(n,e,i)},dispose:function(){this._control.dispose(),this._geo3DBuilder.dispose()}}),Eo=A(11815),No=A(29015),Oo=$.Z.vec3,at=$.Z.mat4,Io=[Eo.Z,No.Z];function Di(e,t,i,r,n){this.name=e,this.map=t,this.regionHeight=0,this.regions=[],this._nameCoordMap={},this.loadGeoJson(i,r,n),this.transform=at.identity(new Float64Array(16)),this.invTransform=at.identity(new Float64Array(16)),this.extrudeY=!0,this.altitudeAxis}Di.prototype={constructor:Di,type:"geo3D",dimensions:["lng","lat","alt"],containPoint:function(){},loadGeoJson:function(e,t,i){var r=_.Nu||_.pQ;try{this.regions=e?r(e):[]}catch(h){throw`Invalid geoJson format
`+h}t=t||{},i=i||{};for(var n=this.regions,a={},o=0;o<n.length;o++){var s=n[o].name;s=i[s]||s,n[o].name=s,a[s]=n[o],this.addGeoCoord(s,n[o].getCenter());var l=t[s];l&&n[o].transformTo(l.left,l.top,l.width,l.height)}this._regionsMap=a,this._geoRect=null,Io.forEach(function(h){h(this)},this)},getGeoBoundingRect:function(){if(this._geoRect)return this._geoRect;for(var e,t=this.regions,i=0;i<t.length;i++){var r=t[i].getBoundingRect();e=e||r.clone(),e.union(r)}return this._geoRect=e||new _.Q.KC(0,0,0,0)},addGeoCoord:function(e,t){this._nameCoordMap[e]=t},getRegion:function(e){return this._regionsMap[e]},getRegionByCoord:function(e){for(var t=this.regions,i=0;i<t.length;i++)if(t[i].contain(e))return t[i]},setSize:function(e,t,i){this.size=[e,t,i];var r=this.getGeoBoundingRect(),n=e/r.width,a=-i/r.height,o=-e/2-r.x*n,s=i/2-r.y*a,l=this.extrudeY?[o,0,s]:[o,s,0],h=this.extrudeY?[n,1,a]:[n,a,1],u=this.transform;at.identity(u),at.translate(u,u,l),at.scale(u,u,h),at.invert(this.invTransform,u)},dataToPoint:function(e,t){t=t||[];var i=this.extrudeY?1:2,r=this.extrudeY?2:1,n=e[2];return isNaN(n)&&(n=0),t[0]=e[0],t[r]=e[1],this.altitudeAxis?t[i]=this.altitudeAxis.dataToCoord(n):t[i]=0,t[i]+=this.regionHeight,Oo.transformMat4(t,t,this.transform),t},pointToData:function(e,t){}};var Rr=Di;function Ro(e,t){var i=e.getBoxLayoutParams(),r=(0,kt.ME)(i,{width:t.getWidth(),height:t.getHeight()});r.y=t.getHeight()-r.y-r.height,this.viewGL.setViewport(r.x,r.y,r.width,r.height,t.getDevicePixelRatio());var n=this.getGeoBoundingRect(),a=n.width/n.height*(e.get("aspectScale")||.75),o=e.get("boxWidth"),s=e.get("boxDepth"),l=e.get("boxHeight");l==null&&(l=5),isNaN(o)&&isNaN(s)&&(o=100),isNaN(s)?s=o/a:isNaN(o)&&(o=s/a),this.setSize(o,l,s),this.regionHeight=e.get("regionHeight"),this.altitudeAxis&&this.altitudeAxis.setExtent(0,Math.max(l-this.regionHeight,0))}function zo(e,t){var i=[1/0,-1/0];if(e.eachSeries(function(n){if(n.coordinateSystem===this&&n.type!=="series.map3D"){var a=n.getData(),o=n.coordDimToDataDim("alt"),s=o&&o[0];if(s){var l=a.getDataExtent(s,!0);i[0]=Math.min(i[0],l[0]),i[1]=Math.max(i[1],l[1])}}},this),i&&isFinite(i[1]-i[0])){var r=_._y.createScale(i,{type:"value",min:"dataMin",max:"dataMax"});this.altitudeAxis=new _.RD("altitude",r),this.resize(this.model,t)}}if(!1)var ql;var zr=0,Gr={dimensions:Rr.prototype.dimensions,create:function(e,t){var i=[];if(!_.FU)throw new Error("geo3D component depends on geo component");function r(n,a){var o=Gr.createGeo3D(n);n.__viewGL=n.__viewGL||new Ee,o.viewGL=n.__viewGL,n.coordinateSystem=o,o.model=n,i.push(o),o.resize=Ro,o.resize(n,t),o.update=zo}return e.eachComponent("geo3D",function(n,a){r(n,a)}),e.eachSeriesByType("map3D",function(n,a){var o=n.get("coordinateSystem");o==null&&(o="geo3D"),o==="geo3D"&&r(n,a)}),e.eachSeries(function(n){if(n.get("coordinateSystem")==="geo3D"){if(n.type==="series.map3D")return;var a=n.getReferringComponents("geo3D").models[0];if(a||(a=e.getComponent("geo3D")),!a)throw new Error('geo "'+B.firstNotNull(n.get("geo3DIndex"),n.get("geo3DId"),0)+'" not found');n.coordinateSystem=a.coordinateSystem}}),i},createGeo3D:function(e){var t=e.get("map"),i;return typeof t=="string"?(i=t,t=_.FU(t)):t&&t.features&&(t={geoJson:t}),i==null&&(i="GEO_ANONYMOUS_"+zr++),new Rr(i+zr++,i,t&&t.geoJson,t&&t.specialAreas,e.get("nameMap"))}},Fr=Gr;function Br(e){e.registerComponentModel(fo),e.registerComponentView(Mo),e.registerAction({type:"geo3DChangeCamera",event:"geo3dcamerachanged",update:"series:updateCamera"},function(t,i){i.eachComponent({mainType:"geo3D",query:t},function(r){r.setView(t)})}),e.registerCoordinateSystem("geo3D",Fr)}(0,_.D$)(Br);function Zr(e,t){e.id=e.id||e.name||t+""}var Xe=_.tF.extend({type:"globe",layoutMode:"box",coordinateSystem:null,init:function(){Xe.superApply(this,"init",arguments),_.D5.each(this.option.layers,function(e,t){_.D5.merge(e,this.defaultLayerOption),Zr(e,t)},this)},mergeOption:function(e){var t=this.option.layers;this.option.layers=null,Xe.superApply(this,"mergeOption",arguments);function i(o){return _.D5.reduce(o,function(s,l,h){return Zr(l,h),s[l.id]=l,s},{})}if(t&&t.length){var r=i(e.layers),n=i(t);for(var a in r)n[a]?_.D5.merge(n[a],r[a],!0):t.push(e.layers[a]);this.option.layers=t}_.D5.each(this.option.layers,function(o){_.D5.merge(o,this.defaultLayerOption)},this)},optionUpdated:function(){this.updateDisplacementHash()},defaultLayerOption:{show:!0,type:"overlay"},defaultOption:{show:!0,zlevel:-10,left:0,top:0,width:"100%",height:"100%",environment:"auto",baseColor:"#fff",baseTexture:"",heightTexture:"",displacementTexture:"",displacementScale:0,displacementQuality:"medium",globeRadius:100,globeOuterRadius:150,shading:"lambert",light:{main:{time:""}},atmosphere:{show:!1,offset:5,color:"#ffffff",glowPower:6,innerGlowPower:2},viewControl:{autoRotate:!0,panSensitivity:0,targetCoord:null},layers:[]},setDisplacementData:function(e,t,i){this.displacementData=e,this.displacementWidth=t,this.displacementHeight=i},getDisplacementTexture:function(){return this.get("displacementTexture")||this.get("heightTexture")},getDisplacemenScale:function(){var e=this.getDisplacementTexture(),t=this.get("displacementScale");return(!e||e==="none")&&(t=0),t},hasDisplacement:function(){return this.getDisplacemenScale()>0},_displacementChanged:!0,_displacementScale:0,updateDisplacementHash:function(){var e=this.getDisplacementTexture(),t=this.getDisplacemenScale();this._displacementChanged=this._displacementTexture!==e||this._displacementScale!==t,this._displacementTexture=e,this._displacementScale=t},isDisplacementChanged:function(){return this._displacementChanged}});_.D5.merge(Xe.prototype,zt),_.D5.merge(Xe.prototype,$e),_.D5.merge(Xe.prototype,Je),_.D5.merge(Xe.prototype,it);var Go=Xe,Hr=Math.PI,we=Math.sin,Ce=Math.cos,Vr=Math.tan,Ur=Math.asin,Wr=Math.atan2,Ye=Hr/180,Fo=1e3*60*60*24,Bo=2440588,Zo=2451545;function Ho(e){return e.valueOf()/Fo-.5+Bo}function Vo(e){return Ho(e)-Zo}var Kt=Ye*23.4397;function Uo(e,t){return Wr(we(e)*Ce(Kt)-Vr(t)*we(Kt),Ce(e))}function Wo(e,t){return Ur(we(t)*Ce(Kt)+Ce(t)*we(Kt)*we(e))}function ko(e,t,i){return Wr(we(e),Ce(e)*we(t)-Vr(i)*Ce(t))}function jo(e,t,i){return Ur(we(t)*we(i)+Ce(t)*Ce(i)*Ce(e))}function Xo(e,t){return Ye*(280.16+360.9856235*e)-t}function Yo(e){return Ye*(357.5291+.98560028*e)}function Qo(e){var t=Ye*(1.9148*we(e)+.02*we(2*e)+3e-4*we(3*e)),i=Ye*102.9372;return e+t+i+Hr}function Ko(e){var t=Yo(e),i=Qo(t);return{dec:Wo(i,0),ra:Uo(i,0)}}var kr={};kr.getPosition=function(e,t,i){var r=Ye*-i,n=Ye*t,a=Vo(e),o=Ko(a),s=Xo(a,r)-o.ra;return{azimuth:ko(s,n,o.dec),altitude:jo(s,n,o.dec)}};var $o=kr,Jo=`@export ecgl.atmosphere.vertex
attribute vec3 position: POSITION;
attribute vec3 normal : NORMAL;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 normalMatrix : WORLDINVERSETRANSPOSE;

varying vec3 v_Normal;

void main() {
 v_Normal = normalize((normalMatrix * vec4(normal, 0.0)).xyz);
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end


@export ecgl.atmosphere.fragment
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform float glowPower;
uniform vec3 glowColor;

varying vec3 v_Normal;

void main() {
 float intensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor = vec4(glowColor, intensity * intensity);
}
@end`;m.Shader.import(Yi.Z),m.Shader.import(Jo);var qo=_.Ir.extend({type:"globe",__ecgl__:!0,_displacementScale:0,init:function(e,t){this.groupGL=new m.Node,this._sphereGeometry=new m.SphereGeometry({widthSegments:200,heightSegments:100,dynamic:!0}),this._overlayGeometry=new m.SphereGeometry({widthSegments:80,heightSegments:40}),this._planeGeometry=new m.PlaneGeometry,this._earthMesh=new m.Mesh({renderNormal:!0}),this._atmosphereMesh=new m.Mesh,this._atmosphereGeometry=new m.SphereGeometry({widthSegments:80,heightSegments:40}),this._atmosphereMaterial=new m.Material({shader:new m.Shader(m.Shader.source("ecgl.atmosphere.vertex"),m.Shader.source("ecgl.atmosphere.fragment")),transparent:!0}),this._atmosphereMesh.geometry=this._atmosphereGeometry,this._atmosphereMesh.material=this._atmosphereMaterial,this._atmosphereMesh.frontFace=m.Mesh.CW,this._lightRoot=new m.Node,this._sceneHelper=new qe,this._sceneHelper.initLight(this._lightRoot),this.groupGL.add(this._atmosphereMesh),this.groupGL.add(this._earthMesh),this._control=new Bt({zr:t.getZr()}),this._control.init(),this._layerMeshes={}},render:function(e,t,i){var r=e.coordinateSystem,n=e.get("shading");r.viewGL.add(this._lightRoot),e.get("show")?r.viewGL.add(this.groupGL):r.viewGL.remove(this.groupGL),this._sceneHelper.setScene(r.viewGL.scene),r.viewGL.setPostEffect(e.getModel("postEffect"),i),r.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling"));var a=this._earthMesh;a.geometry=this._sphereGeometry;var o="ecgl."+n;(!a.material||a.material.shader.name!==o)&&(a.material=m.createMaterial(o)),m.setMaterialFromModel(n,a.material,e,i),["roughnessMap","metalnessMap","detailMap","normalMap"].forEach(function(f){var c=a.material.get(f);c&&(c.flipY=!1)}),a.material.set("color",m.parseColor(e.get("baseColor")));var s=r.radius*.99;if(a.scale.set(s,s,s),e.get("atmosphere.show")){a.material.define("both","ATMOSPHERE_ENABLED"),this._atmosphereMesh.invisible=!1,this._atmosphereMaterial.setUniforms({glowPower:e.get("atmosphere.glowPower")||6,glowColor:e.get("atmosphere.color")||"#ffffff"}),a.material.setUniforms({glowPower:e.get("atmosphere.innerGlowPower")||2,glowColor:e.get("atmosphere.color")||"#ffffff"});var l=e.get("atmosphere.offset")||5;this._atmosphereMesh.scale.set(s+l,s+l,s+l)}else a.material.undefine("both","ATMOSPHERE_ENABLED"),this._atmosphereMesh.invisible=!0;var h=a.material.setTextureImage("diffuseMap",e.get("baseTexture"),i,{flipY:!1,anisotropic:8});h&&h.surface&&h.surface.attachToMesh(a);var u=a.material.setTextureImage("bumpMap",e.get("heightTexture"),i,{flipY:!1,anisotropic:8});u&&u.surface&&u.surface.attachToMesh(a),a.material[e.get("postEffect.enable")?"define":"undefine"]("fragment","SRGB_DECODE"),this._updateLight(e,i),this._displaceVertices(e,i),this._updateViewControl(e,i),this._updateLayers(e,i)},afterRender:function(e,t,i,r){var n=r.renderer;this._sceneHelper.updateAmbientCubemap(n,e,i),this._sceneHelper.updateSkybox(n,e,i)},_updateLayers:function(e,t){var i=e.coordinateSystem,r=e.get("layers"),n=i.radius,a=[],o=[],s=[],l=[];_.D5.each(r,function(d){var v=new _.Hn(d),p=v.get("type"),g=m.loadTexture(v.get("texture"),t,{flipY:!1,anisotropic:8});if(g.surface&&g.surface.attachToMesh(this._earthMesh),p==="blend"){var x=v.get("blendTo"),y=B.firstNotNull(v.get("intensity"),1);x==="emission"?(s.push(g),l.push(y)):(a.push(g),o.push(y))}else{var T=v.get("id"),w=this._layerMeshes[T];w||(w=this._layerMeshes[T]=new m.Mesh({geometry:this._overlayGeometry,castShadow:!1,ignorePicking:!0}));var S=v.get("shading");S==="lambert"?(w.material=w.__lambertMaterial||new m.Material({autoUpdateTextureStatus:!1,shader:m.createShader("ecgl.lambert"),transparent:!0,depthMask:!1}),w.__lambertMaterial=w.material):(w.material=w.__colorMaterial||new m.Material({autoUpdateTextureStatus:!1,shader:m.createShader("ecgl.color"),transparent:!0,depthMask:!1}),w.__colorMaterial=w.material),w.material.enableTexture("diffuseMap");var b=v.get("distance"),L=n+(b==null?i.radius/100:b);w.scale.set(L,L,L),n=L;var D=this._blankTexture||(this._blankTexture=m.createBlankTexture("rgba(255, 255, 255, 0)"));w.material.set("diffuseMap",D),m.loadTexture(v.get("texture"),t,{flipY:!1,anisotropic:8},function(P){P.surface&&P.surface.attachToMesh(w),w.material.set("diffuseMap",P),t.getZr().refresh()}),v.get("show")?this.groupGL.add(w):this.groupGL.remove(w)}},this);var h=this._earthMesh.material;h.define("fragment","LAYER_DIFFUSEMAP_COUNT",a.length),h.define("fragment","LAYER_EMISSIVEMAP_COUNT",s.length),h.set("layerDiffuseMap",a),h.set("layerDiffuseIntensity",o),h.set("layerEmissiveMap",s),h.set("layerEmissionIntensity",l);var u=e.getModel("debug.wireframe");if(u.get("show")){h.define("both","WIREFRAME_TRIANGLE");var f=m.parseColor(u.get("lineStyle.color")||"rgba(0,0,0,0.5)"),c=B.firstNotNull(u.get("lineStyle.width"),1);h.set("wireframeLineWidth",c),h.set("wireframeLineColor",f)}else h.undefine("both","WIREFRAME_TRIANGLE")},_updateViewControl:function(e,t){var i=e.coordinateSystem,r=e.getModel("viewControl"),n=i.viewGL.camera,a=this;function o(){return{type:"globeChangeCamera",alpha:s.getAlpha(),beta:s.getBeta(),distance:s.getDistance()-i.radius,center:s.getCenter(),from:a.uid,globeId:e.id}}var s=this._control;s.setViewGL(i.viewGL);var l=r.get("targetCoord"),h,u;l!=null&&(u=l[0]+90,h=l[1]),s.setFromViewControlModel(r,{baseDistance:i.radius,alpha:h,beta:u}),s.off("update"),s.on("update",function(){t.dispatchAction(o())})},_displaceVertices:function(e,t){var i=e.get("displacementQuality"),r=e.get("debug.wireframe.show"),n=e.coordinateSystem;if(!(!e.isDisplacementChanged()&&i===this._displacementQuality&&r===this._showDebugWireframe)){this._displacementQuality=i,this._showDebugWireframe=r;var a=this._sphereGeometry,o={low:100,medium:200,high:400,ultra:800}[i]||200,s=o/2;(a.widthSegments!==o||r)&&(a.widthSegments=o,a.heightSegments=s,a.build()),this._doDisplaceVertices(a,n),r&&a.generateBarycentric()}},_doDisplaceVertices:function(e,t){var i=e.attributes.position.value,r=e.attributes.texcoord0.value,n=e.__originalPosition;(!n||n.length!==i.length)&&(n=new Float32Array(i.length),n.set(i),e.__originalPosition=n);for(var a=t.displacementWidth,o=t.displacementHeight,s=t.displacementData,l=0;l<e.vertexCount;l++){var h=l*3,u=l*2,f=n[h+1],c=n[h+2],d=n[h+3],v=r[u++],p=r[u++],g=Math.round(v*(a-1)),x=Math.round(p*(o-1)),y=x*a+g,T=s?s[y]:0;i[h+1]=f+f*T,i[h+2]=c+c*T,i[h+3]=d+d*T}e.generateVertexNormals(),e.dirty(),e.updateBoundingBox()},_updateLight:function(e,t){var i=this._earthMesh;this._sceneHelper.updateLight(e);var r=this._sceneHelper.mainLight,n=e.get("light.main.time")||new Date,a=$o.getPosition(_.Rx.parseDate(n),0,0),o=Math.cos(a.altitude);r.position.y=-o*Math.cos(a.azimuth),r.position.x=Math.sin(a.altitude),r.position.z=o*Math.sin(a.azimuth),r.lookAt(i.getWorldPosition())},dispose:function(e,t){this.groupGL.removeAll(),this._control.dispose()}}),es=$.Z.vec3;function Li(e){this.radius=e,this.viewGL=null,this.altitudeAxis,this.displacementData=null,this.displacementWidth,this.displacementHeight}Li.prototype={constructor:Li,dimensions:["lng","lat","alt"],type:"globe",containPoint:function(){},setDisplacementData:function(e,t,i){this.displacementData=e,this.displacementWidth=t,this.displacementHeight=i},_getDisplacementScale:function(e,t){var i=(e+180)/360*(this.displacementWidth-1),r=(90-t)/180*(this.displacementHeight-1),n=Math.round(i)+Math.round(r)*this.displacementWidth;return this.displacementData[n]},dataToPoint:function(e,t){var i=e[0],r=e[1],n=e[2]||0,a=this.radius;this.displacementData&&(a*=1+this._getDisplacementScale(i,r)),this.altitudeAxis&&(a+=this.altitudeAxis.dataToCoord(n)),i=i*Math.PI/180,r=r*Math.PI/180;var o=Math.cos(r)*a;return t=t||[],t[0]=-o*Math.cos(i+Math.PI),t[1]=Math.sin(r)*a,t[2]=o*Math.sin(i+Math.PI),t},pointToData:function(e,t){var i=e[0],r=e[1],n=e[2],a=es.len(e);i/=a,r/=a,n/=a;var o=Math.asin(r),s=Math.atan2(n,-i);s<0&&(s=Math.PI*2+s);var l=o*180/Math.PI,h=s*180/Math.PI-180;return t=t||[],t[0]=h,t[1]=l,t[2]=a-this.radius,this.altitudeAxis&&(t[2]=this.altitudeAxis.coordToData(t[2])),t}};var jr=Li;function ts(e,t){var i=document.createElement("canvas"),r=i.getContext("2d"),n=e.width,a=e.height;i.width=n,i.height=a,r.drawImage(e,0,0,n,a);for(var o=r.getImageData(0,0,n,a).data,s=new Float32Array(o.length/4),l=0;l<o.length/4;l++){var h=o[l*4];s[l]=h/255*t}return{data:s,width:n,height:a}}function is(e,t){var i=e.getBoxLayoutParams(),r=(0,kt.ME)(i,{width:t.getWidth(),height:t.getHeight()});r.y=t.getHeight()-r.y-r.height,this.viewGL.setViewport(r.x,r.y,r.width,r.height,t.getDevicePixelRatio()),this.radius=e.get("globeRadius");var n=e.get("globeOuterRadius");this.altitudeAxis&&this.altitudeAxis.setExtent(0,n-this.radius)}function rs(e,t){var i=[1/0,-1/0];if(e.eachSeries(function(n){if(n.coordinateSystem===this){var a=n.getData(),o=n.coordDimToDataDim("alt"),s=o&&o[0];if(s){var l=a.getDataExtent(s,!0);i[0]=Math.min(i[0],l[0]),i[1]=Math.max(i[1],l[1])}}},this),i&&isFinite(i[1]-i[0])){var r=_._y.createScale(i,{type:"value",min:"dataMin",max:"dataMax"});this.altitudeAxis=new _.RD("altitude",r),this.resize(this.model,t)}}var ns={dimensions:jr.prototype.dimensions,create:function(e,t){var i=[];return e.eachComponent("globe",function(r){r.__viewGL=r.__viewGL||new Ee;var n=new jr;n.viewGL=r.__viewGL,r.coordinateSystem=n,n.model=r,i.push(n),n.resize=is,n.resize(r,t),n.update=rs}),e.eachSeries(function(r){if(r.get("coordinateSystem")==="globe"){var n=r.getReferringComponents("globe").models[0];if(n||(n=e.getComponent("globe")),!n)throw new Error('globe "'+B.firstNotNull(r.get("globe3DIndex"),r.get("globe3DId"),0)+'" not found');var a=n.coordinateSystem;r.coordinateSystem=a}}),e.eachComponent("globe",function(r,n){var a=r.coordinateSystem,o=r.getDisplacementTexture(),s=r.getDisplacemenScale();if(r.isDisplacementChanged()){if(r.hasDisplacement()){var l=!0;m.loadTexture(o,t,function(h){var u=h.image,f=ts(u,s);r.setDisplacementData(f.data,f.width,f.height),l||t.dispatchAction({type:"globeUpdateDisplacment"})}),l=!1}else a.setDisplacementData(null,0,0);a.setDisplacementData(r.displacementData,r.displacementWidth,r.displacementHeight)}}),i}},as=ns;function os(e){e.registerComponentModel(Go),e.registerComponentView(qo),e.registerCoordinateSystem("globe",as),e.registerAction({type:"globeChangeCamera",event:"globecamerachanged",update:"series:updateCamera"},function(t,i){i.eachComponent({mainType:"globe",query:t},function(r){r.setView(t)})}),e.registerAction({type:"globeUpdateDisplacment",event:"globedisplacementupdated",update:"update"},function(t,i){})}(0,_.D$)(os);var Xr=["zoom","center","pitch","bearing"],Ai=_.tF.extend({type:"mapbox3D",layoutMode:"box",coordinateSystem:null,defaultOption:{zlevel:-10,style:"mapbox://styles/mapbox/light-v9",center:[0,0],zoom:0,pitch:0,bearing:0,light:{main:{alpha:20,beta:30}},altitudeScale:1,boxHeight:"auto"},getMapboxCameraOption:function(){var e=this;return Xr.reduce(function(t,i){return t[i]=e.get(i),t},{})},setMapboxCameraOption:function(e){e!=null&&Xr.forEach(function(t){e[t]!=null&&(this.option[t]=e[t])},this)},getMapbox:function(){return this._mapbox},setMapbox:function(e){this._mapbox=e}});_.D5.merge(Ai.prototype,$e),_.D5.merge(Ai.prototype,Je);var ss=Ai;function Ne(e,t){if(this.id=e,this.zr=t,this.dom=document.createElement("div"),this.dom.style.cssText="position:absolute;left:0;right:0;top:0;bottom:0;",!mapboxgl)throw new Error("Mapbox GL library must be included. See https://www.mapbox.com/mapbox-gl-js/api/");this._mapbox=new mapboxgl.Map({container:this.dom}),this._initEvents()}Ne.prototype.setUnpainted=function(){},Ne.prototype.resize=function(){this._mapbox.resize()},Ne.prototype.getMapbox=function(){return this._mapbox},Ne.prototype.clear=function(){},Ne.prototype.refresh=function(){this._mapbox.resize()};var Yr=["mousedown","mouseup","click","dblclick","mousemove","mousewheel","wheel","touchstart","touchend","touchmove","touchcancel"];Ne.prototype._initEvents=function(){var e=this._mapbox.getCanvasContainer();this._handlers=this._handlers||{contextmenu:function(t){return t.preventDefault(),!1}},Yr.forEach(function(t){this._handlers[t]=function(i){var r={};for(var n in i)r[n]=i[n];r.bubbles=!1;var a=new i.constructor(i.type,r);e.dispatchEvent(a)},this.zr.dom.addEventListener(t,this._handlers[t])},this),this.zr.dom.addEventListener("contextmenu",this._handlers.contextmenu)},Ne.prototype.dispose=function(){Yr.forEach(function(e){this.zr.dom.removeEventListener(e,this._handlers[e])},this)};var ls=Ne,Qr=`
@export ecgl.displayShadow.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes

varying vec3 v_WorldPosition;

varying vec3 v_Normal;

void main()
{
 @import ecgl.common.uv.main
 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);

 v_WorldPosition = (world * vec4(position, 1.0)).xyz;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}

@end


@export ecgl.displayShadow.fragment

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform float roughness: 0.2;

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

@import ecgl.common.ssaoMap.header

@import clay.plugin.compute_shadow_map

void main()
{
 float shadow = 1.0;

 @import ecgl.common.ssaoMap.main

#if defined(DIRECTIONAL_LIGHT_COUNT) && defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
 for (int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++) {
 shadow = min(shadow, shadowContribsDir[i] * 0.5 + 0.5);
 }
#endif

 shadow *= 0.5 + ao * 0.5;
 shadow = clamp(shadow, 0.0, 1.0);

 gl_FragColor = vec4(vec3(0.0), 1.0 - shadow);
}

@end`;m.Shader.import(Qr);var eh=512,hs=_.Ir.extend({type:"mapbox3D",__ecgl__:!0,init:function(e,t){var i=t.getZr();this._zrLayer=new ls("mapbox3D",i),i.painter.insertLayer(-1e3,this._zrLayer),this._lightRoot=new m.Node,this._sceneHelper=new qe(this._lightRoot),this._sceneHelper.initLight(this._lightRoot);var r=this._zrLayer.getMapbox(),n=this._dispatchInteractAction.bind(this,t,r);["zoom","rotate","drag","pitch","rotate","move"].forEach(function(a){r.on(a,n)}),this._groundMesh=new m.Mesh({geometry:new m.PlaneGeometry,material:new m.Material({shader:new m.Shader({vertex:m.Shader.source("ecgl.displayShadow.vertex"),fragment:m.Shader.source("ecgl.displayShadow.fragment")}),depthMask:!1}),renderOrder:-100,culling:!1,castShadow:!1,$ignorePicking:!0,renderNormal:!0})},render:function(e,t,i){var r=this._zrLayer.getMapbox(),n=e.get("style"),a=JSON.stringify(n);a!==this._oldStyleStr&&n&&r.setStyle(n),this._oldStyleStr=a,r.setCenter(e.get("center")),r.setZoom(e.get("zoom")),r.setPitch(e.get("pitch")),r.setBearing(e.get("bearing")),e.setMapbox(r);var o=e.coordinateSystem;o.viewGL.scene.add(this._lightRoot),o.viewGL.add(this._groundMesh),this._updateGroundMesh(),this._sceneHelper.setScene(o.viewGL.scene),this._sceneHelper.updateLight(e),o.viewGL.setPostEffect(e.getModel("postEffect"),i),o.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._mapbox3DModel=e},afterRender:function(e,t,i,r){var n=r.renderer;this._sceneHelper.updateAmbientCubemap(n,e,i),this._sceneHelper.updateSkybox(n,e,i),e.coordinateSystem.viewGL.scene.traverse(function(a){a.material&&(a.material.define("fragment","NORMAL_UP_AXIS",2),a.material.define("fragment","NORMAL_FRONT_AXIS",1))})},updateCamera:function(e,t,i,r){e.coordinateSystem.setCameraOption(r),this._updateGroundMesh(),i.getZr().refresh()},_dispatchInteractAction:function(e,t,i){e.dispatchAction({type:"mapbox3DChangeCamera",pitch:t.getPitch(),zoom:t.getZoom(),center:t.getCenter().toArray(),bearing:t.getBearing(),mapbox3DId:this._mapbox3DModel&&this._mapbox3DModel.id})},_updateGroundMesh:function(){if(this._mapbox3DModel){var e=this._mapbox3DModel.coordinateSystem,t=e.dataToPoint(e.center);this._groundMesh.position.set(t[0],t[1],-.001);var i=new m.Plane(new m.Vector3(0,0,1),0),r=e.viewGL.camera.castRay(new m.Vector2(-1,-1)),n=e.viewGL.camera.castRay(new m.Vector2(1,1)),a=r.intersectPlane(i),o=n.intersectPlane(i),s=a.dist(o)/e.viewGL.rootNode.scale.x;this._groundMesh.scale.set(s,s,1)}},dispose:function(e,t){this._zrLayer&&this._zrLayer.dispose(),t.getZr().painter.delLayer(-1e3)}}),Oe=$.Z.mat4,xt=512,Ci=.6435011087932844,_e=Math.PI,ot=1/10;function Pi(){this.width=0,this.height=0,this.altitudeScale=1,this.boxHeight="auto",this.altitudeExtent,this.bearing=0,this.pitch=0,this.center=[0,0],this._origin,this.zoom=0,this._initialZoom,this.maxPitch=60,this.zoomOffset=0}Pi.prototype={constructor:Pi,dimensions:["lng","lat","alt"],containPoint:function(){},setCameraOption:function(e){this.bearing=e.bearing,this.pitch=e.pitch,this.center=e.center,this.zoom=e.zoom,this._origin||(this._origin=this.projectOnTileWithScale(this.center,xt)),this._initialZoom==null&&(this._initialZoom=this.zoom),this.updateTransform()},updateTransform:function(){if(this.height){var e=.5/Math.tan(Ci/2)*this.height*ot,t=Math.max(Math.min(this.pitch,this.maxPitch),0)/180*Math.PI,i=Ci/2,r=Math.PI/2+t,n=Math.sin(i)*e/Math.sin(Math.PI-r-i),a=Math.cos(Math.PI/2-t)*n+e,o=a*1.1;this.pitch>50&&(o=1e3);var s=[];Oe.perspective(s,Ci,this.width/this.height,1,o),this.viewGL.camera.projectionMatrix.setArray(s),this.viewGL.camera.decomposeProjectionMatrix();var s=Oe.identity([]),l=this.dataToPoint(this.center);Oe.scale(s,s,[1,-1,1]),Oe.translate(s,s,[0,0,-e]),Oe.rotateX(s,s,t),Oe.rotateZ(s,s,-this.bearing/180*Math.PI),Oe.translate(s,s,[-l[0]*this.getScale()*ot,-l[1]*this.getScale()*ot,0]),this.viewGL.camera.viewMatrix.array=s;var h=[];Oe.invert(h,s),this.viewGL.camera.worldTransform.array=h,this.viewGL.camera.decomposeWorldTransform();var u=xt*this.getScale(),f;if(this.altitudeExtent&&!isNaN(this.boxHeight)){var c=this.altitudeExtent[1]-this.altitudeExtent[0];f=this.boxHeight/c*this.getScale()/Math.pow(2,this._initialZoom-this.zoomOffset)}else f=u/(2*Math.PI*6378e3*Math.abs(Math.cos(this.center[1]*(Math.PI/180))))*this.altitudeScale*ot;this.viewGL.rootNode.scale.set(this.getScale()*ot,this.getScale()*ot,f)}},getScale:function(){return Math.pow(2,this.zoom-this.zoomOffset)},projectOnTile:function(e,t){return this.projectOnTileWithScale(e,this.getScale()*xt,t)},projectOnTileWithScale:function(e,t,i){var r=e[0],n=e[1],a=r*_e/180,o=n*_e/180,s=t*(a+_e)/(2*_e),l=t*(_e-Math.log(Math.tan(_e/4+o*.5)))/(2*_e);return i=i||[],i[0]=s,i[1]=l,i},unprojectFromTile:function(e,t){return this.unprojectOnTileWithScale(e,this.getScale()*xt,t)},unprojectOnTileWithScale:function(e,t,i){var r=e[0],n=e[1],a=r/t*(2*_e)-_e,o=2*(Math.atan(Math.exp(_e-n/t*(2*_e)))-_e/4);return i=i||[],i[0]=a*180/_e,i[1]=o*180/_e,i},dataToPoint:function(e,t){return t=this.projectOnTileWithScale(e,xt,t),t[0]-=this._origin[0],t[1]-=this._origin[1],t[2]=isNaN(e[2])?0:e[2],isNaN(e[2])||(t[2]=e[2],this.altitudeExtent&&(t[2]-=this.altitudeExtent[0])),t}};var $t=Pi;function yt(){$t.apply(this,arguments)}yt.prototype=new $t,yt.prototype.constructor=yt,yt.prototype.type="mapbox3D";var us=yt;function Kr(e,t,i){function r(a,o){var s=o.getWidth(),l=o.getHeight(),h=o.getDevicePixelRatio();this.viewGL.setViewport(0,0,s,l,h),this.width=s,this.height=l,this.altitudeScale=a.get("altitudeScale"),this.boxHeight=a.get("boxHeight")}function n(a,o){if(this.model.get("boxHeight")!=="auto"){var s=[1/0,-1/0];a.eachSeries(function(l){if(l.coordinateSystem===this){var h=l.getData(),u=l.coordDimToDataDim("alt")[0];if(u){var f=h.getDataExtent(u,!0);s[0]=Math.min(s[0],f[0]),s[1]=Math.max(s[1],f[1])}}},this),s&&isFinite(s[1]-s[0])&&(this.altitudeExtent=s)}}return{dimensions:t.prototype.dimensions,create:function(a,o){var s=[];return a.eachComponent(e,function(l){var h=l.__viewGL;h||(h=l.__viewGL=new Ee,h.setRootNode(new m.Node));var u=new t;u.viewGL=l.__viewGL,u.resize=r,u.resize(l,o),s.push(u),l.coordinateSystem=u,u.model=l,u.update=n}),a.eachSeries(function(l){if(l.get("coordinateSystem")===e){var h=l.getReferringComponents(e).models[0];if(h||(h=a.getComponent(e)),!h)throw new Error(e+' "'+B.firstNotNull(l.get(e+"Index"),l.get(e+"Id"),0)+'" not found');l.coordinateSystem=h.coordinateSystem}}),i&&i(s,a,o),s}}}var fs=Kr("mapbox3D",us,function(e){e.forEach(function(t){t.setCameraOption(t.model.getMapboxCameraOption())})}),cs=fs;function ds(e){e.registerComponentModel(ss),e.registerComponentView(hs),e.registerCoordinateSystem("mapbox3D",cs),e.registerAction({type:"mapbox3DChangeCamera",event:"mapbox3dcamerachanged",update:"mapbox3D:updateCamera"},function(t,i){i.eachComponent({mainType:"mapbox3D",query:t},function(r){r.setMapboxCameraOption(t)})})}(0,_.D$)(ds);var $r=["zoom","center","pitch","bearing"],Mi=_.tF.extend({type:"maptalks3D",layoutMode:"box",coordinateSystem:null,defaultOption:{zlevel:-10,urlTemplate:"http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>',center:[0,0],zoom:0,pitch:0,bearing:0,light:{main:{alpha:20,beta:30}},altitudeScale:1,boxHeight:"auto"},getMaptalksCameraOption:function(){var e=this;return $r.reduce(function(t,i){return t[i]=e.get(i),t},{})},setMaptalksCameraOption:function(e){e!=null&&$r.forEach(function(t){e[t]!=null&&(this.option[t]=e[t])},this)},getMaptalks:function(){return this._maptalks},setMaptalks:function(e){this._maptalks=e}});_.D5.merge(Mi.prototype,$e),_.D5.merge(Mi.prototype,Je);var vs=Mi;function Ie(e,t,i,r){if(this.id=e,this.zr=t,this.dom=document.createElement("div"),this.dom.style.cssText="position:absolute;left:0;right:0;top:0;bottom:0;",!maptalks)throw new Error("Maptalks library must be included. See https://maptalks.org");this._maptalks=new maptalks.Map(this.dom,{center:i,zoom:r,doubleClickZoom:!1,fog:!1}),this._initEvents()}Ie.prototype.setUnpainted=function(){},Ie.prototype.resize=function(){this._maptalks.checkSize()},Ie.prototype.getMaptalks=function(){return this._maptalks},Ie.prototype.clear=function(){},Ie.prototype.refresh=function(){this._maptalks.checkSize()};var Jr=["mousedown","mouseup","click","dblclick","mousemove","mousewheel","DOMMouseScroll","touchstart","touchend","touchmove","touchcancel"];Ie.prototype._initEvents=function(){var e=this.dom;this._handlers=this._handlers||{contextmenu:function(t){return t.preventDefault(),!1}},Jr.forEach(function(t){this._handlers[t]=function(i){var r={};for(var n in i)r[n]=i[n];r.bubbles=!1;var a=new i.constructor(i.type,r);t==="mousewheel"||t==="DOMMouseScroll"?e.dispatchEvent(a):e.firstElementChild.dispatchEvent(a)},this.zr.dom.addEventListener(t,this._handlers[t])},this),this.zr.dom.addEventListener("contextmenu",this._handlers.contextmenu)},Ie.prototype.dispose=function(){Jr.forEach(function(e){this.zr.dom.removeEventListener(e,this._handlers[e])},this),this._maptalks.remove()};var ps=Ie;m.Shader.import(Qr);var ms=_.Ir.extend({type:"maptalks3D",__ecgl__:!0,init:function(e,t){this._groundMesh=new m.Mesh({geometry:new m.PlaneGeometry,material:new m.Material({shader:new m.Shader({vertex:m.Shader.source("ecgl.displayShadow.vertex"),fragment:m.Shader.source("ecgl.displayShadow.fragment")}),depthMask:!1}),renderOrder:-100,culling:!1,castShadow:!1,$ignorePicking:!0,renderNormal:!0})},_initMaptalksLayer:function(e,t){var i=t.getZr();this._zrLayer=new ps("maptalks3D",i,e.get("center"),e.get("zoom")),i.painter.insertLayer(-1e3,this._zrLayer),this._lightRoot=new m.Node,this._sceneHelper=new qe(this._lightRoot),this._sceneHelper.initLight(this._lightRoot);var r=this._zrLayer.getMaptalks(),n=this._dispatchInteractAction.bind(this,t,r);["zoomend","zooming","zoomstart","dragrotating","pitch","pitchend","movestart","moving","moveend","resize","touchstart","touchmove","touchend","animating"].forEach(function(a){r.on(a,n)})},render:function(e,t,i){this._zrLayer||this._initMaptalksLayer(e,i);var r=this._zrLayer.getMaptalks(),n=e.get("urlTemplate"),a=r.getBaseLayer();n!==this._oldUrlTemplate&&(a?a.setOptions({urlTemplate:n,attribution:e.get("attribution")}):(a=new maptalks.TileLayer("maptalks-echarts-gl-baselayer",{urlTemplate:n,subdomains:["a","b","c"],attribution:e.get("attribution")}),r.setBaseLayer(a))),this._oldUrlTemplate=n,r.setCenter(e.get("center")),r.setZoom(e.get("zoom"),{animation:!1}),r.setPitch(e.get("pitch")),r.setBearing(e.get("bearing")),e.setMaptalks(r);var o=e.coordinateSystem;o.viewGL.scene.add(this._lightRoot),o.viewGL.add(this._groundMesh),this._updateGroundMesh(),this._sceneHelper.setScene(o.viewGL.scene),this._sceneHelper.updateLight(e),o.viewGL.setPostEffect(e.getModel("postEffect"),i),o.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._maptalks3DModel=e},afterRender:function(e,t,i,r){var n=r.renderer;this._sceneHelper.updateAmbientCubemap(n,e,i),this._sceneHelper.updateSkybox(n,e,i),e.coordinateSystem.viewGL.scene.traverse(function(a){a.material&&(a.material.define("fragment","NORMAL_UP_AXIS",2),a.material.define("fragment","NORMAL_FRONT_AXIS",1))})},updateCamera:function(e,t,i,r){e.coordinateSystem.setCameraOption(r),this._updateGroundMesh(),i.getZr().refresh()},_dispatchInteractAction:function(e,t,i){e.dispatchAction({type:"maptalks3DChangeCamera",pitch:t.getPitch(),zoom:_s(t.getResolution())+1,center:t.getCenter().toArray(),bearing:t.getBearing(),maptalks3DId:this._maptalks3DModel&&this._maptalks3DModel.id})},_updateGroundMesh:function(){if(this._maptalks3DModel){var e=this._maptalks3DModel.coordinateSystem,t=e.dataToPoint(e.center);this._groundMesh.position.set(t[0],t[1],-.001);var i=new m.Plane(new m.Vector3(0,0,1),0),r=e.viewGL.camera.castRay(new m.Vector2(-1,-1)),n=e.viewGL.camera.castRay(new m.Vector2(1,1)),a=r.intersectPlane(i),o=n.intersectPlane(i),s=a.dist(o)/e.viewGL.rootNode.scale.x;this._groundMesh.scale.set(s,s,1)}},dispose:function(e,t){this._zrLayer&&this._zrLayer.dispose(),t.getZr().painter.delLayer(-1e3)}});const gs=2*6378137*Math.PI/(256*Math.pow(2,20));function _s(e){return 19-Math.log(e/gs)/Math.LN2}function wt(){$t.apply(this,arguments),this.maxPitch=85,this.zoomOffset=1}wt.prototype=new $t,wt.prototype.constructor=wt,wt.prototype.type="maptalks3D";var xs=wt,ys=Kr("maptalks3D",xs,function(e){e.forEach(function(t){t.setCameraOption(t.model.getMaptalksCameraOption())})}),ws=ys;function Ts(e){e.registerComponentModel(vs),e.registerComponentView(ms),e.registerCoordinateSystem("maptalks3D",ws),e.registerAction({type:"maptalks3DChangeCamera",event:"maptalks3dcamerachanged",update:"maptalks3D:updateCamera"},function(t,i){i.eachComponent({mainType:"maptalks3D",query:t},function(r){r.setMaptalksCameraOption(t)})})}(0,_.D$)(Ts);var bs=$.Z.vec3,Ss=_._y.dataStack.isDimensionStacked;function Ds(e){var t=e[0],i=e[1];return!(t>0&&i>0||t<0&&i<0)}function Ls(e,t){var i=e.getData(),r=e.get("barSize");if(r==null){var n=t.size,a,o,s=t.getAxis("x"),l=t.getAxis("y");s.type==="category"?a=s.getBandWidth()*.7:a=Math.round(n[0]/Math.sqrt(i.count()))*.6,l.type==="category"?o=l.getBandWidth()*.7:o=Math.round(n[1]/Math.sqrt(i.count()))*.6,r=[a,o]}else _.D5.isArray(r)||(r=[r,r]);var h=t.getAxis("z").scale.getExtent(),u=Ds(h),f=["x","y","z"].map(function(v){return e.coordDimToDataDim(v)[0]}),c=Ss(i,f[2]),d=c?i.getCalculationInfo("stackResultDimension"):f[2];i.each(f,function(v,p,g,x){var y=i.get(d,x),T=c?y-g:u?0:h[0],w=t.dataToPoint([v,p,T]),S=t.dataToPoint([v,p,y]),b=bs.dist(w,S),L=[0,S[1]<w[1]?-1:1,0];Math.abs(b)===0&&(b=.1);var D=[r[0],b,r[1]];i.setItemLayout(x,[w,L,D])}),i.setLayout("orient",[1,0,0])}var As=Ls;function Ei(e,t,i){for(var r=e.getDataExtent(t),n=e.getDataExtent(i),a=r[1]-r[0]||r[0],o=n[1]-n[0]||n[0],s=50,l=new Uint8Array(s*s),h=0;h<e.count();h++){var u=e.get(t,h),f=e.get(i,h),c=Math.floor((u-r[0])/a*(s-1)),d=Math.floor((f-n[0])/o*(s-1)),v=d*s+c;l[v]=l[v]||1}for(var p=0,h=0;h<l.length;h++)l[h]&&p++;return p/l.length}var qr=$.Z.vec3,Cs=_._y.dataStack.isDimensionStacked;function Ps(e,t){var i=e.getData(),r=e.get("minHeight")||0,n=e.get("barSize"),a=["lng","lat","alt"].map(function(h){return e.coordDimToDataDim(h)[0]});if(n==null){var o=t.radius*Math.PI,s=Ei(i,a[0],a[1]);n=[o/Math.sqrt(i.count()/s),o/Math.sqrt(i.count()/s)]}else _.D5.isArray(n)||(n=[n,n]);var l=Ni(i,a);i.each(a,function(h,u,f,c){var d=i.get(l.dimension,c),v=l.isStacked?d-f:t.altitudeAxis.scale.getExtent()[0],p=Math.max(t.altitudeAxis.dataToCoord(f),r),g=t.dataToPoint([h,u,v]),x=t.dataToPoint([h,u,d]),y=qr.sub([],x,g);qr.normalize(y,y);var T=[n[0],p,n[1]];i.setItemLayout(c,[g,y,T])}),i.setLayout("orient",me.Z.UP.array)}function Ms(e,t){var i=e.getData(),r=e.get("barSize"),n=e.get("minHeight")||0,a=["lng","lat","alt"].map(function(u){return e.coordDimToDataDim(u)[0]});if(r==null){var o=Math.min(t.size[0],t.size[2]),s=Ei(i,a[0],a[1]);r=[o/Math.sqrt(i.count()/s),o/Math.sqrt(i.count()/s)]}else _.D5.isArray(r)||(r=[r,r]);var l=[0,1,0],h=Ni(i,a);i.each(a,function(u,f,c,d){var v=i.get(h.dimension,d),p=h.isStacked?v-c:t.altitudeAxis.scale.getExtent()[0],g=Math.max(t.altitudeAxis.dataToCoord(c),n),x=t.dataToPoint([u,f,p]),y=[r[0],g,r[1]];i.setItemLayout(d,[x,l,y])}),i.setLayout("orient",[1,0,0])}function Es(e,t){var i=e.getData(),r=e.coordDimToDataDim("lng")[0],n=e.coordDimToDataDim("lat")[0],a=e.coordDimToDataDim("alt")[0],o=e.get("barSize"),s=e.get("minHeight")||0;if(o==null){var l=i.getDataExtent(r),h=i.getDataExtent(n),u=t.dataToPoint([l[0],h[0]]),f=t.dataToPoint([l[1],h[1]]),c=Math.min(Math.abs(u[0]-f[0]),Math.abs(u[1]-f[1]))||1,d=Ei(i,r,n);o=[c/Math.sqrt(i.count()/d),c/Math.sqrt(i.count()/d)]}else _.D5.isArray(o)||(o=[o,o]),o[0]/=t.getScale()/16,o[1]/=t.getScale()/16;var v=[0,0,1],p=[r,n,a],g=Ni(i,p);i.each(p,function(x,y,T,w){var S=i.get(g.dimension,w),b=g.isStacked?S-T:0,L=t.dataToPoint([x,y,b]),D=t.dataToPoint([x,y,S]),P=Math.max(D[2]-L[2],s),M=[o[0],P,o[1]];i.setItemLayout(w,[L,v,M])}),i.setLayout("orient",[1,0,0])}function Ni(e,t){var i=Cs(e,t[2]);return{dimension:i?e.getCalculationInfo("stackResultDimension"):t[2],isStacked:i}}function Ns(e){e.registerLayout(function(t,i){t.eachSeriesByType("bar3D",function(r){var n=r.coordinateSystem,a=n&&n.type;a==="globe"?Ps(r,n):a==="cartesian3D"?As(r,n):a==="geo3D"?Ms(r,n):(a==="mapbox3D"||a==="maptalks3D")&&Es(r,n)})})}var Oi={};Oi.getFormattedLabel=function(e,t,i,r,n){i=i||"normal";var a=e.getData(r),o=a.getItemModel(t),s=e.getDataParams(t,r);n!=null&&s.value instanceof Array&&(s.value=s.value[n]);var l=o.get(i==="normal"?["label","formatter"]:["emphasis","label","formatter"]);l==null&&(l=o.get(["label","formatter"]));var h;return typeof l=="function"?(s.status=i,h=l(s)):typeof l=="string"&&(h=_.WU.formatTpl(l,s)),h},Oi.normalizeToArray=function(e){return e instanceof Array?e:e==null?[]:[e]};var st=Oi;function Os(e,t){var i=[];return _.D5.each(e.dimensions,function(r){var n=e.getDimensionInfo(r),a=n.otherDims,o=a[t];o!=null&&o!==!1&&(i[o]=n.name)}),i}function Tt(e,t,i){function r(f){var c=!0,d=[],v=Os(n,"tooltip");v.length?_.D5.each(v,function(g){p(n.get(g,t),g)}):_.D5.each(f,p);function p(g,x){var y=n.getDimensionInfo(x);if(!(!y||y.otherDims.tooltip===!1)){var T=y.type,w=(c?"- "+(y.tooltipName||y.name)+": ":"")+(T==="ordinal"?g+"":T==="time"?i?"":_.WU.formatTime("yyyy/MM/dd hh:mm:ss",g):_.WU.addCommas(g));w&&d.push(_.WU.encodeHTML(w))}}return(c?"<br/>":"")+d.join(c?"<br/>":", ")}var n=e.getData(),a=e.getRawValue(t),o=_.D5.isArray(a)?r(a):_.WU.encodeHTML(_.WU.addCommas(a)),s=n.getName(t),l=ne(n,t);_.D5.isObject(l)&&l.colorStops&&(l=(l.colorStops[0]||{}).color),l=l||"transparent";var h=_.WU.getTooltipMarker(l),u=e.name;return u==="\0-"&&(u=""),u=u?_.WU.encodeHTML(u)+(i?": ":"<br/>"):"",i?h+u+o:u+h+(s?_.WU.encodeHTML(s)+": "+o:o)}function Jt(e,t,i){i=i||e.getSource();var r=t||_.wL(e.get("coordinateSystem"))||["x","y","z"],n=_._y.createDimensions(i,{dimensionsDefine:i.dimensionsDefine||e.get("dimensions"),encodeDefine:i.encodeDefine||e.get("encode"),coordDimensions:r.map(function(s){var l=e.getReferringComponents(s+"Axis3D").models[0];return{type:l&&l.get("type")==="category"?"ordinal":"float",name:s}})});e.get("coordinateSystem")==="cartesian3D"&&n.forEach(function(s){if(r.indexOf(s.coordDim)>=0){var l=e.getReferringComponents(s.coordDim+"Axis3D").models[0];l&&l.get("type")==="category"&&(s.ordinalMeta=l.getOrdinalMeta())}});var a=_._y.dataStack.enableDataStack(e,n,{byIndex:!0,stackedCoordDimension:"z"}),o=new _.aV(n,e);return o.setCalculationInfo(a),o.initData(i),o}var en=_.wJ.extend({type:"series.bar3D",dependencies:["globe"],visualStyleAccessPathvisu:"itemStyle",getInitialData:function(e,t){return Jt(this)},getFormattedLabel:function(e,t,i,r){var n=st.getFormattedLabel(this,e,t,i,r);return n==null&&(n=this.getData().get("z",e)),n},formatTooltip:function(e){return Tt(this,e)},defaultOption:{coordinateSystem:"cartesian3D",globeIndex:0,grid3DIndex:0,zlevel:-10,bevelSize:0,bevelSmoothness:2,onGridPlane:"xy",shading:"color",minHeight:0,itemStyle:{opacity:1},label:{show:!1,distance:2,textStyle:{fontSize:14,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:3}},emphasis:{label:{show:!0}},animationDurationUpdate:500}});_.D5.merge(en.prototype,it);var Is=en,Q=$.Z.vec3,Rs=$.Z.mat3,Ii=H.Z.extend(function(){return{attributes:{position:new H.Z.Attribute("position","float",3,"POSITION"),normal:new H.Z.Attribute("normal","float",3,"NORMAL"),color:new H.Z.Attribute("color","float",4,"COLOR"),prevPosition:new H.Z.Attribute("prevPosition","float",3),prevNormal:new H.Z.Attribute("prevNormal","float",3)},dynamic:!0,enableNormal:!1,bevelSize:1,bevelSegments:0,_dataIndices:null,_vertexOffset:0,_triangleOffset:0}},{resetOffset:function(){this._vertexOffset=0,this._triangleOffset=0},setBarCount:function(e){var t=this.enableNormal,i=this.getBarVertexCount()*e,r=this.getBarTriangleCount()*e;this.vertexCount!==i&&(this.attributes.position.init(i),t?this.attributes.normal.init(i):this.attributes.normal.value=null,this.attributes.color.init(i)),this.triangleCount!==r&&(this.indices=i>65535?new Uint32Array(r*3):new Uint16Array(r*3),this._dataIndices=new Uint32Array(i))},getBarVertexCount:function(){var e=this.bevelSize>0?this.bevelSegments:0;return e>0?this._getBevelBarVertexCount(e):this.enableNormal?24:8},getBarTriangleCount:function(){var e=this.bevelSize>0?this.bevelSegments:0;return e>0?this._getBevelBarTriangleCount(e):12},_getBevelBarVertexCount:function(e){return(e+1)*4*(e+1)*2},_getBevelBarTriangleCount:function(e){var t=e*4+3,i=e*2+1;return(t+1)*i*2+4},setColor:function(e,t){for(var i=this.getBarVertexCount(),r=i*e,n=i*(e+1),a=r;a<n;a++)this.attributes.color.set(a,t);this.dirtyAttribute("color")},getDataIndexOfVertex:function(e){return this._dataIndices?this._dataIndices[e]:null},addBar:function(){for(var e=Q.create,t=Q.scaleAndAdd,i=e(),r=e(),n=e(),a=e(),o=e(),s=e(),l=e(),h=[],u=[],f=0;f<8;f++)h[f]=e();for(var c=[[0,1,5,4],[2,3,7,6],[4,5,6,7],[3,2,1,0],[0,4,7,3],[1,2,6,5]],d=[0,1,2,0,2,3],v=[],f=0;f<c.length;f++)for(var p=c[f],g=0;g<2;g++){for(var x=[],y=0;y<3;y++)x.push(p[d[g*3+y]]);v.push(x)}return function(T,w,S,b,L,D){var P=this._vertexOffset;if(this.bevelSize>0&&this.bevelSegments>0)this._addBevelBar(T,w,S,b,this.bevelSize,this.bevelSegments,L);else{Q.copy(n,w),Q.normalize(n,n),Q.cross(a,S,n),Q.normalize(a,a),Q.cross(r,n,a),Q.normalize(a,a),Q.negate(o,r),Q.negate(s,n),Q.negate(l,a),t(h[0],T,r,b[0]/2),t(h[0],h[0],a,b[2]/2),t(h[1],T,r,b[0]/2),t(h[1],h[1],l,b[2]/2),t(h[2],T,o,b[0]/2),t(h[2],h[2],l,b[2]/2),t(h[3],T,o,b[0]/2),t(h[3],h[3],a,b[2]/2),t(i,T,n,b[1]),t(h[4],i,r,b[0]/2),t(h[4],h[4],a,b[2]/2),t(h[5],i,r,b[0]/2),t(h[5],h[5],l,b[2]/2),t(h[6],i,o,b[0]/2),t(h[6],h[6],l,b[2]/2),t(h[7],i,o,b[0]/2),t(h[7],h[7],a,b[2]/2);var M=this.attributes;if(this.enableNormal){u[0]=r,u[1]=o,u[2]=n,u[3]=s,u[4]=a,u[5]=l;for(var E=this._vertexOffset,N=0;N<c.length;N++){for(var F=this._triangleOffset*3,O=0;O<6;O++)this.indices[F++]=E+d[O];E+=4,this._triangleOffset+=2}for(var N=0;N<c.length;N++)for(var z=u[N],O=0;O<4;O++){var V=c[N][O];M.position.set(this._vertexOffset,h[V]),M.normal.set(this._vertexOffset,z),M.color.set(this._vertexOffset++,L)}}else{for(var N=0;N<v.length;N++){for(var F=this._triangleOffset*3,O=0;O<3;O++)this.indices[F+O]=v[N][O]+this._vertexOffset;this._triangleOffset++}for(var N=0;N<h.length;N++)M.position.set(this._vertexOffset,h[N]),M.color.set(this._vertexOffset++,L)}}for(var U=this._vertexOffset,N=P;N<U;N++)this._dataIndices[N]=D}}(),_addBevelBar:function(){var e=Q.create(),t=Q.create(),i=Q.create(),r=Rs.create(),n=[],a=[1,-1,-1,1],o=[1,1,-1,-1],s=[2,0];return function(l,h,u,f,c,d,v){Q.copy(t,h),Q.normalize(t,t),Q.cross(i,u,t),Q.normalize(i,i),Q.cross(e,t,i),Q.normalize(i,i),r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=t[0],r[4]=t[1],r[5]=t[2],r[6]=i[0],r[7]=i[1],r[8]=i[2],c=Math.min(f[0],f[2])/2*c;for(var p=0;p<3;p++)n[p]=Math.max(f[p]-c*2,0);for(var g=(f[0]-n[0])/2,x=(f[1]-n[1])/2,y=(f[2]-n[2])/2,T=[],w=[],S=this._vertexOffset,b=[],p=0;p<2;p++){b[p]=b[p]=[];for(var L=0;L<=d;L++)for(var D=0;D<4;D++){(L===0&&p===0||p===1&&L===d)&&b[p].push(S);for(var P=0;P<=d;P++){var M=P/d*Math.PI/2+Math.PI/2*D,E=L/d*Math.PI/2+Math.PI/2*p;w[0]=g*Math.cos(M)*Math.sin(E),w[1]=x*Math.cos(E),w[2]=y*Math.sin(M)*Math.sin(E),T[0]=w[0]+a[D]*n[0]/2,T[1]=w[1]+x+s[p]*n[1]/2,T[2]=w[2]+o[D]*n[2]/2,Math.abs(g-x)<1e-6&&Math.abs(x-y)<1e-6||(w[0]/=g*g,w[1]/=x*x,w[2]/=y*y),Q.normalize(w,w),Q.transformMat3(T,T,r),Q.transformMat3(w,w,r),Q.add(T,T,l),this.attributes.position.set(S,T),this.enableNormal&&this.attributes.normal.set(S,w),this.attributes.color.set(S,v),S++}}}for(var N=d*4+3,F=d*2+1,O=N+1,D=0;D<F;D++)for(var p=0;p<=N;p++){var z=D*O+p+this._vertexOffset,V=D*O+(p+1)%O+this._vertexOffset,U=(D+1)*O+(p+1)%O+this._vertexOffset,C=(D+1)*O+p+this._vertexOffset;this.setTriangleIndices(this._triangleOffset++,[U,z,V]),this.setTriangleIndices(this._triangleOffset++,[U,C,z])}this.setTriangleIndices(this._triangleOffset++,[b[0][0],b[0][2],b[0][1]]),this.setTriangleIndices(this._triangleOffset++,[b[0][0],b[0][3],b[0][2]]),this.setTriangleIndices(this._triangleOffset++,[b[1][0],b[1][1],b[1][2]]),this.setTriangleIndices(this._triangleOffset++,[b[1][0],b[1][2],b[1][3]]),this._vertexOffset=S}}()});_.D5.defaults(Ii.prototype,dt),_.D5.defaults(Ii.prototype,Ti);var zs=Ii,Gs=$.Z.vec3,Fs=_.TA.extend({type:"bar3D",__ecgl__:!0,init:function(e,t){this.groupGL=new m.Node,this._api=t,this._labelsBuilder=new bi(256,256,t);var i=this;this._labelsBuilder.getLabelPosition=function(r,n,a){if(i._data){var o=i._data.getItemLayout(r),s=o[0],l=o[1],h=o[2][1];return Gs.scaleAndAdd([],s,l,a+h)}else return[0,0]},this._labelsBuilder.getMesh().renderOrder=100},render:function(e,t,i){var r=this._prevBarMesh;this._prevBarMesh=this._barMesh,this._barMesh=r,this._barMesh||(this._barMesh=new m.Mesh({geometry:new zs,shadowDepthMaterial:new m.Material({shader:new m.Shader(m.Shader.source("ecgl.sm.depth.vertex"),m.Shader.source("ecgl.sm.depth.fragment"))}),culling:e.coordinateSystem.type==="cartesian3D",renderOrder:10,renderNormal:!0})),this.groupGL.remove(this._prevBarMesh),this.groupGL.add(this._barMesh),this.groupGL.add(this._labelsBuilder.getMesh());var n=e.coordinateSystem;if(this._doRender(e,i),n&&n.viewGL){n.viewGL.add(this.groupGL);var a=n.viewGL.isLinearSpace()?"define":"undefine";this._barMesh.material[a]("fragment","SRGB_DECODE")}this._data=e.getData(),this._labelsBuilder.updateData(this._data),this._labelsBuilder.updateLabels(),this._updateAnimation(e)},_updateAnimation:function(e){m.updateVertexAnimation([["prevPosition","position"],["prevNormal","normal"]],this._prevBarMesh,this._barMesh,e)},_doRender:function(e,t){var i=e.getData(),r=e.get("shading"),n=r!=="color",a=this,o=this._barMesh,s="ecgl."+r;(!o.material||o.material.shader.name!==s)&&(o.material=m.createMaterial(s,["VERTEX_COLOR"])),m.setMaterialFromModel(r,o.material,e,t),o.geometry.enableNormal=n,o.geometry.resetOffset();var l=e.get("bevelSize"),h=e.get("bevelSmoothness");o.geometry.bevelSegments=h,o.geometry.bevelSize=l;var u=[],f=new Float32Array(i.count()*4),c=0,g=0,d=!1;i.each(function(y){if(i.hasValue(y)){var T=ne(i,y),w=ae(i,y);w==null&&(w=1),m.parseColor(T,u),u[3]*=w,f[c++]=u[0],f[c++]=u[1],f[c++]=u[2],f[c++]=u[3],u[3]>0&&(g++,u[3]<.99&&(d=!0))}}),o.geometry.setBarCount(g);var v=i.getLayout("orient"),p=this._barIndexOfData=new Int32Array(i.count()),g=0;i.each(function(y){if(!i.hasValue(y)){p[y]=-1;return}var T=i.getItemLayout(y),w=T[0],S=T[1],b=T[2],L=y*4;u[0]=f[L++],u[1]=f[L++],u[2]=f[L++],u[3]=f[L++],u[3]>0&&(a._barMesh.geometry.addBar(w,S,v,b,u,y),p[y]=g++)}),o.geometry.dirty(),o.geometry.updateBoundingBox();var x=o.material;x.transparent=d,x.depthMask=!d,o.geometry.sortTriangles=d,this._initHandler(e,t)},_initHandler:function(e,t){var i=e.getData(),r=this._barMesh,n=e.coordinateSystem.type==="cartesian3D";r.seriesIndex=e.seriesIndex;var a=-1;r.off("mousemove"),r.off("mouseout"),r.on("mousemove",function(o){var s=r.geometry.getDataIndexOfVertex(o.triangle[0]);s!==a&&(this._downplay(a),this._highlight(s),this._labelsBuilder.updateLabels([s]),n&&t.dispatchAction({type:"grid3DShowAxisPointer",value:[i.get("x",s),i.get("y",s),i.get("z",s,!0)]})),a=s,r.dataIndex=s},this),r.on("mouseout",function(o){this._downplay(a),this._labelsBuilder.updateLabels(),a=-1,r.dataIndex=-1,n&&t.dispatchAction({type:"grid3DHideAxisPointer"})},this)},_highlight:function(e){var t=this._data;if(t){var i=this._barIndexOfData[e];if(!(i<0)){var r=t.getItemModel(e),n=r.getModel("emphasis.itemStyle"),a=n.get("color"),o=n.get("opacity");if(a==null){var s=ne(t,e);a=_.$_.lift(s,-.4)}o==null&&(o=ae(t,e));var l=m.parseColor(a);l[3]*=o,this._barMesh.geometry.setColor(i,l),this._api.getZr().refresh()}}},_downplay:function(e){var t=this._data;if(t){var i=this._barIndexOfData[e];if(!(i<0)){var r=ne(t,e),n=ae(t,e),a=m.parseColor(r);a[3]*=n,this._barMesh.geometry.setColor(i,a),this._api.getZr().refresh()}}},highlight:function(e,t,i,r){this._toggleStatus("highlight",e,t,i,r)},downplay:function(e,t,i,r){this._toggleStatus("downplay",e,t,i,r)},_toggleStatus:function(e,t,i,r,n){var a=t.getData(),o=B.queryDataIndex(a,n),s=this;o!=null?_.D5.each(st.normalizeToArray(o),function(l){e==="highlight"?this._highlight(l):this._downplay(l)},this):a.each(function(l){e==="highlight"?s._highlight(l):s._downplay(l)})},remove:function(){this.groupGL.removeAll()},dispose:function(){this._labelsBuilder.dispose(),this.groupGL.removeAll()}});function Bs(e){e.registerChartView(Fs),e.registerSeriesModel(Is),Ns(e),e.registerProcessor(function(t,i){t.eachSeriesByType("bar3d",function(r){var n=r.getData();n.filterSelf(function(a){return n.hasValue(a)})})})}(0,_.D$)(Bs);var Zs=_.wJ.extend({type:"series.line3D",dependencies:["grid3D"],visualStyleAccessPath:"lineStyle",visualDrawType:"stroke",getInitialData:function(e,t){return Jt(this)},formatTooltip:function(e){return Tt(this,e)},defaultOption:{coordinateSystem:"cartesian3D",zlevel:-10,grid3DIndex:0,lineStyle:{width:2},animationDurationUpdate:500}}),Hs=Zs,Vs=A(55265),Us=$.Z.vec3;m.Shader.import(Vt);var Ws=_.TA.extend({type:"line3D",__ecgl__:!0,init:function(e,t){this.groupGL=new m.Node,this._api=t},render:function(e,t,i){var r=this._prevLine3DMesh;this._prevLine3DMesh=this._line3DMesh,this._line3DMesh=r,this._line3DMesh||(this._line3DMesh=new m.Mesh({geometry:new Ze({useNativeLine:!1,sortTriangles:!0}),material:new m.Material({shader:m.createShader("ecgl.meshLines3D")}),renderOrder:10}),this._line3DMesh.geometry.pick=this._pick.bind(this)),this.groupGL.remove(this._prevLine3DMesh),this.groupGL.add(this._line3DMesh);var n=e.coordinateSystem;if(n&&n.viewGL){n.viewGL.add(this.groupGL);var a=n.viewGL.isLinearSpace()?"define":"undefine";this._line3DMesh.material[a]("fragment","SRGB_DECODE")}this._doRender(e,i),this._data=e.getData(),this._camera=n.viewGL.camera,this.updateCamera(),this._updateAnimation(e)},updateCamera:function(){this._updateNDCPosition()},_doRender:function(e,t){var i=e.getData(),r=this._line3DMesh;r.geometry.resetOffset();var n=i.getLayout("points"),a=[],o=new Float32Array(n.length/3*4),s=0,l=!1;i.each(function(f){var c=ne(i,f),d=ae(i,f);d==null&&(d=1),m.parseColor(c,a),a[3]*=d,o[s++]=a[0],o[s++]=a[1],o[s++]=a[2],o[s++]=a[3],a[3]<.99&&(l=!0)}),r.geometry.setVertexCount(r.geometry.getPolylineVertexCount(n)),r.geometry.setTriangleCount(r.geometry.getPolylineTriangleCount(n)),r.geometry.addPolyline(n,o,B.firstNotNull(e.get("lineStyle.width"),1)),r.geometry.dirty(),r.geometry.updateBoundingBox();var h=r.material;h.transparent=l,h.depthMask=!l;var u=e.getModel("debug.wireframe");u.get("show")?(r.geometry.createAttribute("barycentric","float",3),r.geometry.generateBarycentric(),r.material.set("both","WIREFRAME_TRIANGLE"),r.material.set("wireframeLineColor",m.parseColor(u.get("lineStyle.color")||"rgba(0,0,0,0.5)")),r.material.set("wireframeLineWidth",B.firstNotNull(u.get("lineStyle.width"),1))):r.material.set("both","WIREFRAME_TRIANGLE"),this._points=n,this._initHandler(e,t)},_updateAnimation:function(e){m.updateVertexAnimation([["prevPosition","position"],["prevPositionPrev","positionPrev"],["prevPositionNext","positionNext"]],this._prevLine3DMesh,this._line3DMesh,e)},_initHandler:function(e,t){var i=e.getData(),r=e.coordinateSystem,n=this._line3DMesh,a=-1;n.seriesIndex=e.seriesIndex,n.off("mousemove"),n.off("mouseout"),n.on("mousemove",function(o){var s=r.pointToData(o.point.array),l=i.indicesOfNearest("x",s[0])[0];l!==a&&(t.dispatchAction({type:"grid3DShowAxisPointer",value:[i.get("x",l),i.get("y",l),i.get("z",l)]}),n.dataIndex=l),a=l},this),n.on("mouseout",function(o){a=-1,n.dataIndex=-1,t.dispatchAction({type:"grid3DHideAxisPointer"})},this)},_updateNDCPosition:function(){var e=new ue.Z,t=this._camera;ue.Z.multiply(e,t.projectionMatrix,t.viewMatrix);var i=this._positionNDC,r=this._points,n=r.length/3;(!i||i.length/2!==n)&&(i=this._positionNDC=new Float32Array(n*2));for(var a=[],o=0;o<n;o++){var s=o*3,l=o*2;a[0]=r[s],a[1]=r[s+1],a[2]=r[s+2],a[3]=1,Us.transformMat4(a,a,e.array),i[l]=a[0]/a[3],i[l+1]=a[1]/a[3]}},_pick:function(e,t,i,r,n,a){var o=this._positionNDC,s=this._data.hostModel,l=s.get("lineStyle.width"),h=-1,u=i.viewport.width,f=i.viewport.height,c=u*.5,d=f*.5;e=(e+1)*c,t=(t+1)*d;for(var v=1;v<o.length/2;v++){var p=(o[(v-1)*2]+1)*c,g=(o[(v-1)*2+1]+1)*d,x=(o[v*2]+1)*c,y=(o[v*2+1]+1)*d;if(Vs.m(p,g,x,y,l,e,t)){var T=(p-e)*(p-e)+(g-t)*(g-t),w=(x-e)*(x-e)+(y-t)*(y-t);h=T<w?v-1:v}}if(h>=0){var S=h*3,b=new me.Z(this._points[S],this._points[S+1],this._points[S+2]);a.push({dataIndex:h,point:b,pointWorld:b.clone(),target:this._line3DMesh,distance:this._camera.getWorldPosition().dist(b)})}},remove:function(){this.groupGL.removeAll()},dispose:function(){this.groupGL.removeAll()}});function ks(e){e.registerChartView(Ws),e.registerSeriesModel(Hs),e.registerLayout(function(t,i){t.eachSeriesByType("line3D",function(r){var n=r.getData(),a=r.coordinateSystem;if(a){if(a.type!=="cartesian3D")return;var o=new Float32Array(n.count()*3),s=[],l=[],h=a.dimensions,u=h.map(function(f){return r.coordDimToDataDim(f)[0]});a&&n.each(u,function(f,c,d,v){s[0]=f,s[1]=c,s[2]=d,a.dataToPoint(s,l),o[v*3]=l[0],o[v*3+1]=l[1],o[v*3+2]=l[2]}),n.setLayout("points",o)}})})}(0,_.D$)(ks);var js=_.wJ.extend({type:"series.scatter3D",dependencies:["globe","grid3D","geo3D"],visualStyleAccessPath:"itemStyle",hasSymbolVisual:!0,getInitialData:function(e,t){return Jt(this)},getFormattedLabel:function(e,t,i,r){var n=st.getFormattedLabel(this,e,t,i,r);if(n==null){var a=this.getData(),o=a.dimensions[a.dimensions.length-1];n=a.get(o,e)}return n},formatTooltip:function(e){return Tt(this,e)},defaultOption:{coordinateSystem:"cartesian3D",zlevel:-10,progressive:1e5,progressiveThreshold:1e5,grid3DIndex:0,globeIndex:0,symbol:"circle",symbolSize:10,blendMode:"source-over",label:{show:!1,position:"right",distance:5,textStyle:{fontSize:14,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:3}},itemStyle:{opacity:.8},emphasis:{label:{show:!0}},animationDurationUpdate:500}});function Ri(e,r,i){var r=r||document.createElement("canvas");r.width=e,r.height=e;var n=r.getContext("2d");return i&&i(n),r}function Xs(e,t,i,r){_.D5.isArray(t)||(t=[t,t]);var n=zi.getMarginByStyle(i,r),a=t[0]+n.left+n.right,o=t[1]+n.top+n.bottom,s=_._y.createSymbol(e,0,0,t[0],t[1]),l=Math.max(a,o);s.x=n.left,s.y=n.top,a>o?s.y+=(l-o)/2:s.x+=(l-a)/2;var h=s.getBoundingRect();return s.x-=h.x,s.y-=h.y,s.setStyle(i),s.update(),s.__size=l,s}function Ys(e,t,i){var r=t.width,n=t.height,a=e.canvas.width,o=e.canvas.height,s=r/a,l=n/o;function h(x){return x<128?1:-1}function u(x,y){var T=1/0;x=Math.floor(x*s),y=Math.floor(y*l);for(var w=y*r+x,S=t.data[w*4],b=h(S),L=Math.max(y-i,0);L<Math.min(y+i,n);L++)for(var D=Math.max(x-i,0);D<Math.min(x+i,r);D++){var w=L*r+D,P=t.data[w*4],M=h(P),E=D-x,N=L-y;if(b!==M){var F=E*E+N*N;F<T&&(T=F)}}return b*Math.sqrt(T)}for(var f=e.createImageData(a,o),c=0;c<o;c++)for(var d=0;d<a;d++){var v=u(d,c),p=v/i*.5+.5,g=(c*a+d)*4;f.data[g++]=(1-p)*255,f.data[g++]=(1-p)*255,f.data[g++]=(1-p)*255,f.data[g++]=255}return f}var zi={getMarginByStyle:function(e){var t=e.minMargin||0,i=0;e.stroke&&e.stroke!=="none"&&(i=e.lineWidth==null?1:e.lineWidth);var r=e.shadowBlur||0,n=e.shadowOffsetX||0,a=e.shadowOffsetY||0,o={};return o.left=Math.max(i/2,-n+r,t),o.right=Math.max(i/2,n+r,t),o.top=Math.max(i/2,-a+r,t),o.bottom=Math.max(i/2,a+r,t),o},createSymbolSprite:function(e,t,i,r){var n=Xs(e,t,i),a=zi.getMarginByStyle(i);return{image:Ri(n.__size,r,function(o){_.z$(o,n)}),margin:a}},createSDFFromCanvas:function(e,t,i,r){return Ri(t,r,function(n){var a=e.getContext("2d"),o=a.getImageData(0,0,e.width,e.height);n.putImageData(Ys(n,o,i),0,0)})},createSimpleSprite:function(e,t){return Ri(e,t,function(i){var r=e/2;i.beginPath(),i.arc(r,r,60,0,Math.PI*2,!1),i.closePath();var n=i.createRadialGradient(r,r,0,r,r,r);n.addColorStop(0,"rgba(255, 255, 255, 1)"),n.addColorStop(.5,"rgba(255, 255, 255, 0.5)"),n.addColorStop(1,"rgba(255, 255, 255, 0)"),i.fillStyle=n,i.fill()})}},tn=zi,rn=$.Z.vec3,Qs={needsSortVertices:function(){return this.sortVertices},needsSortVerticesProgressively:function(){return this.needsSortVertices()&&this.vertexCount>=2e4},doSortVertices:function(e,t){var i=this.indices,r=rn.create();if(!i){i=this.indices=this.vertexCount>65535?new Uint32Array(this.vertexCount):new Uint16Array(this.vertexCount);for(var n=0;n<i.length;n++)i[n]=n}if(t===0){var a=this.attributes.position,e=e.array,o=0;(!this._zList||this._zList.length!==this.vertexCount)&&(this._zList=new Float32Array(this.vertexCount));for(var s,n=0;n<this.vertexCount;n++){a.get(n,r);var l=rn.sqrDist(r,e);isNaN(l)&&(l=1e7,o++),n===0?(s=l,l=0):l=l-s,this._zList[n]=l}this._noneCount=o}if(this.vertexCount<2e4)t===0&&this._simpleSort(this._noneCount/this.vertexCount>.05);else for(var n=0;n<3;n++)this._progressiveQuickSort(t*3+n);this.dirtyIndices()},_simpleSort:function(e){var t=this._zList,i=this.indices;function r(n,a){return t[a]-t[n]}e?Array.prototype.sort.call(i,r):Yt.sort(i,r,0,i.length-1)},_progressiveQuickSort:function(e){var t=this._zList,i=this.indices;this._quickSort=this._quickSort||new Yt,this._quickSort.step(i,function(r,n){return t[n]-t[r]},e)}},Ks=`@export ecgl.sdfSprite.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform float elapsedTime : 0;

attribute vec3 position : POSITION;

#ifdef VERTEX_SIZE
attribute float size;
#else
uniform float u_Size;
#endif

#ifdef VERTEX_COLOR
attribute vec4 a_FillColor: COLOR;
varying vec4 v_Color;
#endif

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute float prevSize;
uniform float percent : 1.0;
#endif


#ifdef POSITIONTEXTURE_ENABLED
uniform sampler2D positionTexture;
#endif

varying float v_Size;

void main()
{

#ifdef POSITIONTEXTURE_ENABLED
 gl_Position = worldViewProjection * vec4(texture2D(positionTexture, position.xy).xy, -10.0, 1.0);
#else

 #ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
 #else
 vec3 pos = position;
 #endif
 gl_Position = worldViewProjection * vec4(pos, 1.0);
#endif

#ifdef VERTEX_SIZE
#ifdef VERTEX_ANIMATION
 v_Size = mix(prevSize, size, percent);
#else
 v_Size = size;
#endif
#else
 v_Size = u_Size;
#endif

#ifdef VERTEX_COLOR
 v_Color = a_FillColor;
 #endif

 gl_PointSize = v_Size;
}

@end

@export ecgl.sdfSprite.fragment

uniform vec4 color: [1, 1, 1, 1];
uniform vec4 strokeColor: [1, 1, 1, 1];
uniform float smoothing: 0.07;

uniform float lineWidth: 0.0;

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

varying float v_Size;

uniform sampler2D sprite;

@import clay.util.srgb

void main()
{
 gl_FragColor = color;

 vec4 _strokeColor = strokeColor;

#ifdef VERTEX_COLOR
 gl_FragColor *= v_Color;
 #endif

#ifdef SPRITE_ENABLED
 float d = texture2D(sprite, gl_PointCoord).r;
 gl_FragColor.a *= smoothstep(0.5 - smoothing, 0.5 + smoothing, d);

 if (lineWidth > 0.0) {
 float sLineWidth = lineWidth / 2.0;

 float outlineMaxValue0 = 0.5 + sLineWidth;
 float outlineMaxValue1 = 0.5 + sLineWidth + smoothing;
 float outlineMinValue0 = 0.5 - sLineWidth - smoothing;
 float outlineMinValue1 = 0.5 - sLineWidth;

 if (d <= outlineMaxValue1 && d >= outlineMinValue0) {
 float a = _strokeColor.a;
 if (d <= outlineMinValue1) {
 a = a * smoothstep(outlineMinValue0, outlineMinValue1, d);
 }
 else {
 a = a * smoothstep(outlineMaxValue1, outlineMaxValue0, d);
 }
 gl_FragColor.rgb = mix(gl_FragColor.rgb * gl_FragColor.a, _strokeColor.rgb, a);
 gl_FragColor.a = gl_FragColor.a * (1.0 - a) + a;
 }
 }
#endif

#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(gl_FragColor);
#endif
}
@end`,Gi=$.Z.vec4;m.Shader.import(Ks);var $s=m.Mesh.extend(function(){var e=new m.Geometry({dynamic:!0,attributes:{color:new m.Geometry.Attribute("color","float",4,"COLOR"),position:new m.Geometry.Attribute("position","float",3,"POSITION"),size:new m.Geometry.Attribute("size","float",1),prevPosition:new m.Geometry.Attribute("prevPosition","float",3),prevSize:new m.Geometry.Attribute("prevSize","float",1)}});Object.assign(e,Qs);var t=new m.Material({shader:m.createShader("ecgl.sdfSprite"),transparent:!0,depthMask:!1});t.enableTexture("sprite"),t.define("both","VERTEX_COLOR"),t.define("both","VERTEX_SIZE");var i=new m.Texture2D({image:document.createElement("canvas"),flipY:!1});return t.set("sprite",i),e.pick=this._pick.bind(this),{geometry:e,material:t,mode:m.Mesh.POINTS,sizeScale:1}},{_pick:function(e,t,i,r,n,a){var o=this._positionNDC;if(o)for(var s=i.viewport,l=2/s.width,h=2/s.height,u=this.geometry.vertexCount-1;u>=0;u--){var f;this.geometry.indices?f=this.geometry.indices[u]:f=u;var c=o[f*2],d=o[f*2+1],v=this.geometry.attributes.size.get(f)/this.sizeScale,p=v/2;if(e>c-p*l&&e<c+p*l&&t>d-p*h&&t<d+p*h){var g=new m.Vector3,x=new m.Vector3;this.geometry.attributes.position.get(f,g.array),m.Vector3.transformMat4(x,g,this.worldTransform),a.push({vertexIndex:f,point:g,pointWorld:x,target:this,distance:x.distance(r.getWorldPosition())})}}},updateNDCPosition:function(e,t,i){var r=this._positionNDC,n=this.geometry;(!r||r.length/2!==n.vertexCount)&&(r=this._positionNDC=new Float32Array(n.vertexCount*2));for(var a=Gi.create(),o=0;o<n.vertexCount;o++)n.attributes.position.get(o,a),a[3]=1,Gi.transformMat4(a,a,e.array),Gi.scale(a,a,1/a[3]),r[o*2]=a[0],r[o*2+1]=a[1]}}),Js=$s,nn=20,an=-10;function qs(e,t){return e&&t&&e[0]===t[0]&&e[1]===t[1]}function Fi(e,t){this.rootNode=new m.Node,this.is2D=e,this._labelsBuilder=new bi(256,256,t),this._labelsBuilder.getMesh().renderOrder=100,this.rootNode.add(this._labelsBuilder.getMesh()),this._api=t,this._spriteImageCanvas=document.createElement("canvas"),this._startDataIndex=0,this._endDataIndex=0,this._sizeScale=1}Fi.prototype={constructor:Fi,highlightOnMouseover:!0,update:function(e,t,i,r,n){var a=this._prevMesh;this._prevMesh=this._mesh,this._mesh=a;var o=e.getData();if(r==null&&(r=0),n==null&&(n=o.count()),this._startDataIndex=r,this._endDataIndex=n-1,!this._mesh){var s=this._prevMesh&&this._prevMesh.material;this._mesh=new Js({renderOrder:10,frustumCulling:!1}),s&&(this._mesh.material=s)}var s=this._mesh.material,l=this._mesh.geometry,h=l.attributes;this.rootNode.remove(this._prevMesh),this.rootNode.add(this._mesh),this._setPositionTextureToMesh(this._mesh,this._positionTexture);var u=this._getSymbolInfo(e,r,n),f=i.getDevicePixelRatio(),c=e.getModel("itemStyle").getItemStyle(),d=e.get("large"),v=1;u.maxSize>2?(v=this._updateSymbolSprite(e,c,u,f),s.enableTexture("sprite")):s.disableTexture("sprite"),h.position.init(n-r);var p=[];if(d){s.undefine("VERTEX_SIZE"),s.undefine("VERTEX_COLOR");var g=Co(o),x=Po(o);m.parseColor(g,p),p[3]*=x,s.set({color:p,u_Size:u.maxSize*this._sizeScale})}else s.set({color:[1,1,1,1]}),s.define("VERTEX_SIZE"),s.define("VERTEX_COLOR"),h.size.init(n-r),h.color.init(n-r),this._originalOpacity=new Float32Array(n-r);for(var y=o.getLayout("points"),T=h.position.value,w=!1,S=0;S<n-r;S++){var b=S*3,L=S*2;if(this.is2D?(T[b]=y[L],T[b+1]=y[L+1],T[b+2]=an):(T[b]=y[b],T[b+1]=y[b+1],T[b+2]=y[b+2]),!d){var g=ne(o,S),x=ae(o,S);m.parseColor(g,p),p[3]*=x,h.color.set(S,p),p[3]<.99&&(w=!0);var D=o.getItemVisual(S,"symbolSize");D=D instanceof Array?Math.max(D[0],D[1]):D,isNaN(D)&&(D=0),h.size.value[S]=D*v*this._sizeScale,this._originalOpacity[S]=p[3]}}this._mesh.sizeScale=v,l.updateBoundingBox(),l.dirty(),this._updateMaterial(e,c);var P=e.coordinateSystem;if(P&&P.viewGL){var M=P.viewGL.isLinearSpace()?"define":"undefine";s[M]("fragment","SRGB_DECODE")}d||this._updateLabelBuilder(e,r,n),this._updateHandler(e,t,i),this._updateAnimation(e),this._api=i},getPointsMesh:function(){return this._mesh},updateLabels:function(e){this._labelsBuilder.updateLabels(e)},hideLabels:function(){this.rootNode.remove(this._labelsBuilder.getMesh())},showLabels:function(){this.rootNode.add(this._labelsBuilder.getMesh())},dispose:function(){this._labelsBuilder.dispose()},_updateSymbolSprite:function(e,t,i,r){i.maxSize=Math.min(i.maxSize*2,200);var n=[];return i.aspect>1?(n[0]=i.maxSize,n[1]=i.maxSize/i.aspect):(n[1]=i.maxSize,n[0]=i.maxSize*i.aspect),n[0]=n[0]||1,n[1]=n[1]||1,(this._symbolType!==i.type||!qs(this._symbolSize,n)||this._lineWidth!==t.lineWidth)&&(tn.createSymbolSprite(i.type,n,{fill:"#fff",lineWidth:t.lineWidth,stroke:"transparent",shadowColor:"transparent",minMargin:Math.min(n[0]/2,10)},this._spriteImageCanvas),tn.createSDFFromCanvas(this._spriteImageCanvas,Math.min(this._spriteImageCanvas.width,32),nn,this._mesh.material.get("sprite").image),this._symbolType=i.type,this._symbolSize=n,this._lineWidth=t.lineWidth),this._spriteImageCanvas.width/i.maxSize*r},_updateMaterial:function(e,t){var i=e.get("blendMode")==="lighter"?m.additiveBlend:null,r=this._mesh.material;r.blend=i,r.set("lineWidth",t.lineWidth/nn);var n=m.parseColor(t.stroke);r.set("strokeColor",n),r.transparent=!0,r.depthMask=!1,r.depthTest=!this.is2D,r.sortVertices=!this.is2D},_updateLabelBuilder:function(e,o,i){var r=e.getData(),n=this._mesh.geometry,a=n.attributes.position.value,o=this._startDataIndex,s=this._mesh.sizeScale;this._labelsBuilder.updateData(r,o,i),this._labelsBuilder.getLabelPosition=function(l,h,u){var f=(l-o)*3;return[a[f],a[f+1],a[f+2]]},this._labelsBuilder.getLabelDistance=function(l,h,u){var f=n.attributes.size.get(l-o)/s;return f/2+u},this._labelsBuilder.updateLabels()},_updateAnimation:function(e){m.updateVertexAnimation([["prevPosition","position"],["prevSize","size"]],this._prevMesh,this._mesh,e)},_updateHandler:function(e,t,i){var r=e.getData(),n=this._mesh,a=this,o=-1,s=e.coordinateSystem&&e.coordinateSystem.type==="cartesian3D",l;s&&(l=e.coordinateSystem.model),n.seriesIndex=e.seriesIndex,n.off("mousemove"),n.off("mouseout"),n.on("mousemove",function(h){var u=h.vertexIndex+a._startDataIndex;u!==o&&(this.highlightOnMouseover&&(this.downplay(r,o),this.highlight(r,u),this._labelsBuilder.updateLabels([u])),s&&i.dispatchAction({type:"grid3DShowAxisPointer",value:[r.get(e.coordDimToDataDim("x")[0],u),r.get(e.coordDimToDataDim("y")[0],u),r.get(e.coordDimToDataDim("z")[0],u)],grid3DIndex:l.componentIndex})),n.dataIndex=u,o=u},this),n.on("mouseout",function(h){var u=h.vertexIndex+a._startDataIndex;this.highlightOnMouseover&&(this.downplay(r,u),this._labelsBuilder.updateLabels()),o=-1,n.dataIndex=-1,s&&i.dispatchAction({type:"grid3DHideAxisPointer",grid3DIndex:l.componentIndex})},this)},updateLayout:function(e,t,i){var r=e.getData();if(this._mesh){var n=this._mesh.geometry.attributes.position.value,a=r.getLayout("points");if(this.is2D)for(var o=0;o<a.length/2;o++){var s=o*3,l=o*2;n[s]=a[l],n[s+1]=a[l+1],n[s+2]=an}else for(var o=0;o<a.length;o++)n[o]=a[o];this._mesh.geometry.dirty(),i.getZr().refresh()}},updateView:function(e){if(this._mesh){var t=new ue.Z;ue.Z.mul(t,e.viewMatrix,this._mesh.worldTransform),ue.Z.mul(t,e.projectionMatrix,t),this._mesh.updateNDCPosition(t,this.is2D,this._api)}},highlight:function(e,t){if(!(t>this._endDataIndex||t<this._startDataIndex)){var i=e.getItemModel(t),r=i.getModel("emphasis.itemStyle"),n=r.get("color"),a=r.get("opacity");if(n==null){var o=ne(e,t);n=_.$_.lift(o,-.4)}a==null&&(a=ae(e,t));var s=m.parseColor(n);s[3]*=a,this._mesh.geometry.attributes.color.set(t-this._startDataIndex,s),this._mesh.geometry.dirtyAttribute("color"),this._api.getZr().refresh()}},downplay:function(e,t){if(!(t>this._endDataIndex||t<this._startDataIndex)){var i=ne(e,t),r=ae(e,t),n=m.parseColor(i);n[3]*=r,this._mesh.geometry.attributes.color.set(t-this._startDataIndex,n),this._mesh.geometry.dirtyAttribute("color"),this._api.getZr().refresh()}},fadeOutAll:function(e){if(this._originalOpacity){for(var t=this._mesh.geometry,i=0;i<t.vertexCount;i++){var r=this._originalOpacity[i]*e;t.attributes.color.value[i*4+3]=r}t.dirtyAttribute("color"),this._api.getZr().refresh()}},fadeInAll:function(){this.fadeOutAll(1)},setPositionTexture:function(e){this._mesh&&this._setPositionTextureToMesh(this._mesh,e),this._positionTexture=e},removePositionTexture:function(){this._positionTexture=null,this._mesh&&this._setPositionTextureToMesh(this._mesh,null)},setSizeScale:function(e){if(e!==this._sizeScale){if(this._mesh){var t=this._mesh.material.get("u_Size");this._mesh.material.set("u_Size",t/this._sizeScale*e);var i=this._mesh.geometry.attributes;if(i.size.value)for(var r=0;r<i.size.value.length;r++)i.size.value[r]=i.size.value[r]/this._sizeScale*e}this._sizeScale=e}},_setPositionTextureToMesh:function(e,t){t&&e.material.set("positionTexture",t),e.material[t?"enableTexture":"disableTexture"]("positionTexture")},_getSymbolInfo:function(e,t,i){if(e.get("large")){var r=B.firstNotNull(e.get("symbolSize"),1),h,a;return r instanceof Array?(h=Math.max(r[0],r[1]),a=r[0]/r[1]):(h=r,a=1),{maxSize:r,type:e.get("symbol"),aspect:a}}for(var n=e.getData(),a,o=!1,s=n.getItemVisual(0,"symbol")||"circle",l=!1,h=0,u=t;u<i;u++){var r=n.getItemVisual(u,"symbolSize"),f=n.getItemVisual(u,"symbol"),c;if(r instanceof Array)c=r[0]/r[1],h=Math.max(Math.max(r[0],r[1]),h);else{if(isNaN(r))continue;c=1,h=Math.max(r,h)}s=f,a=c}return{maxSize:h,type:s,aspect:a}}};var bt=Fi,el=_.TA.extend({type:"scatter3D",hasSymbolVisual:!0,__ecgl__:!0,init:function(e,t){this.groupGL=new m.Node,this._pointsBuilderList=[],this._currentStep=0},render:function(e,t,i){if(this.groupGL.removeAll(),!!e.getData().count()){var r=e.coordinateSystem;if(r&&r.viewGL){r.viewGL.add(this.groupGL),this._camera=r.viewGL.camera;var n=this._pointsBuilderList[0];n||(n=this._pointsBuilderList[0]=new bt(!1,i)),this._pointsBuilderList.length=1,this.groupGL.add(n.rootNode),n.update(e,t,i),n.updateView(r.viewGL.camera)}}},incrementalPrepareRender:function(e,t,i){var r=e.coordinateSystem;r&&r.viewGL&&(r.viewGL.add(this.groupGL),this._camera=r.viewGL.camera),this.groupGL.removeAll(),this._currentStep=0},incrementalRender:function(e,t,i,r){if(!(e.end<=e.start)){var n=this._pointsBuilderList[this._currentStep];n||(n=new bt(!1,r),this._pointsBuilderList[this._currentStep]=n),this.groupGL.add(n.rootNode),n.update(t,i,r,e.start,e.end),n.updateView(t.coordinateSystem.viewGL.camera),this._currentStep++}},updateCamera:function(){this._pointsBuilderList.forEach(function(e){e.updateView(this._camera)},this)},highlight:function(e,t,i,r){this._toggleStatus("highlight",e,t,i,r)},downplay:function(e,t,i,r){this._toggleStatus("downplay",e,t,i,r)},_toggleStatus:function(e,t,i,r,n){var a=t.getData(),o=B.queryDataIndex(a,n),s=e==="highlight";o!=null?_.D5.each(st.normalizeToArray(o),function(l){for(var h=0;h<this._pointsBuilderList.length;h++){var u=this._pointsBuilderList[h];s?u.highlight(a,l):u.downplay(a,l)}},this):a.each(function(l){for(var h=0;h<this._pointsBuilderList.length;h++){var u=this._pointsBuilderList[h];s?u.highlight(a,l):u.downplay(a,l)}})},dispose:function(){this._pointsBuilderList.forEach(function(e){e.dispose()}),this.groupGL.removeAll()},remove:function(){this.groupGL.removeAll()}});function tl(e){e.registerChartView(el),e.registerSeriesModel(js),e.registerLayout({seriesType:"scatter3D",reset:function(t){var i=t.coordinateSystem;if(i){var r=i.dimensions;if(r.length<3)return;var n=r.map(function(s){return t.coordDimToDataDim(s)[0]}),a=[],o=[];return{progress:function(s,l){for(var h=new Float32Array((s.end-s.start)*3),u=s.start;u<s.end;u++){var f=(u-s.start)*3;a[0]=l.get(n[0],u),a[1]=l.get(n[1],u),a[2]=l.get(n[2],u),i.dataToPoint(a,o),h[f]=o[0],h[f+1]=o[1],h[f+2]=o[2]}l.setLayout("points",h)}}}}})}(0,_.D$)(tl);var ee=$.Z.vec3,on=$.Z.vec2,Pe=ee.normalize,qt=ee.cross,sn=ee.sub,Bi=ee.add,Re=ee.create,ze=Re(),Te=Re(),Ge=Re(),St=Re(),ln=[],hn=[];function il(e,t){on.copy(ln,e[0]),on.copy(hn,e[1]);var i=[],r=i[0]=Re(),n=i[1]=Re(),a=i[2]=Re(),o=i[3]=Re();t.dataToPoint(ln,r),t.dataToPoint(hn,o),Pe(ze,r),sn(Te,o,r),Pe(Te,Te),qt(Ge,Te,ze),Pe(Ge,Ge),qt(Te,ze,Ge),Bi(n,ze,Te),Pe(n,n),Pe(ze,o),sn(Te,r,o),Pe(Te,Te),qt(Ge,Te,ze),Pe(Ge,Ge),qt(Te,ze,Ge),Bi(a,ze,Te),Pe(a,a),Bi(St,r,o),Pe(St,St);var s=ee.dot(r,St),l=ee.dot(St,n),h=(Math.max(ee.len(r),ee.len(o))-s)/l*2;return ee.scaleAndAdd(n,r,n,h),ee.scaleAndAdd(a,o,a,h),i}function rl(e,t,i){var r=[],n=r[0]=ee.create(),a=r[1]=ee.create(),o=r[2]=ee.create(),s=r[3]=ee.create();t.dataToPoint(e[0],n),t.dataToPoint(e[1],s);var l=ee.dist(n,s);return ee.lerp(a,n,s,.3),ee.lerp(o,n,s,.3),ee.scaleAndAdd(a,a,i,Math.min(l*.1,10)),ee.scaleAndAdd(o,o,i,Math.min(l*.1,10)),r}function un(e,t){for(var i=new Float32Array(e.length*3),r=0,n=[],a=0;a<e.length;a++)t.dataToPoint(e[a],n),i[r++]=n[0],i[r++]=n[1],i[r++]=n[2];return i}function fn(e){var t=[];return e.each(function(i){var r=e.getItemModel(i),n=r.option instanceof Array?r.option:r.getShallow("coords",!0);t.push(n)}),{coordsList:t}}function nl(e,t){var i=e.getData(),r=e.get("polyline");i.setLayout("lineType",r?"polyline":"cubicBezier");var n=fn(i);i.each(function(a){var o=n.coordsList[a],s=r?un:il;i.setItemLayout(a,s(o,t))})}function cn(e,t,i){var r=e.getData(),n=e.get("polyline"),a=fn(r);r.setLayout("lineType",n?"polyline":"cubicBezier"),r.each(function(o){var s=a.coordsList[o],l=n?un(s,t):rl(s,t,i);r.setItemLayout(o,l)})}function al(e,t){e.eachSeriesByType("lines3D",function(i){var r=i.coordinateSystem;r.type==="globe"?nl(i,r):r.type==="geo3D"?cn(i,r,[0,1,0]):(r.type==="mapbox3D"||r.type==="maptalks3D")&&cn(i,r,[0,0,1])})}var ol=_.wJ.extend({type:"series.lines3D",dependencies:["globe"],visualStyleAccessPath:"lineStyle",visualDrawType:"stroke",getInitialData:function(e,t){var i=new _.aV(["value"],this);return i.hasItemOption=!1,i.initData(e.data,[],function(r,n,a,o){if(r instanceof Array)return NaN;i.hasItemOption=!0;var s=r.value;if(s!=null)return s instanceof Array?s[o]:s}),i},defaultOption:{coordinateSystem:"globe",globeIndex:0,geo3DIndex:0,zlevel:-10,polyline:!1,effect:{show:!1,period:4,trailWidth:4,trailLength:.2,spotIntensity:6},silent:!0,blendMode:"source-over",lineStyle:{width:1,opacity:.5}}}),sl=`@export ecgl.trail2.vertex
attribute vec3 position: POSITION;
attribute vec3 positionPrev;
attribute vec3 positionNext;
attribute float offset;
attribute float dist;
attribute float distAll;
attribute float start;

attribute vec4 a_Color : COLOR;

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;
uniform float near : NEAR;

uniform float speed : 0;
uniform float trailLength: 0.3;
uniform float time;
uniform float period: 1000;

uniform float spotSize: 1;

varying vec4 v_Color;
varying float v_Percent;
varying float v_SpotPercent;

@import ecgl.common.wireframe.vertexHeader

@import ecgl.lines3D.clipNear

void main()
{
 @import ecgl.lines3D.expandLine

 gl_Position = currProj;

 v_Color = a_Color;

 @import ecgl.common.wireframe.vertexMain

#ifdef CONSTANT_SPEED
 float t = mod((speed * time + start) / distAll, 1. + trailLength) - trailLength;
#else
 float t = mod((time + start) / period, 1. + trailLength) - trailLength;
#endif

 float trailLen = distAll * trailLength;

 v_Percent = (dist - t * distAll) / trailLen;

 v_SpotPercent = spotSize / distAll;

 }
@end


@export ecgl.trail2.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
uniform float spotIntensity: 5;

varying vec4 v_Color;
varying float v_Percent;
varying float v_SpotPercent;

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
 if (v_Percent > 1.0 || v_Percent < 0.0) {
 discard;
 }

 float fade = v_Percent;

#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif

 @import ecgl.common.wireframe.fragmentMain

 if (v_Percent > (1.0 - v_SpotPercent)) {
 gl_FragColor.rgb *= spotIntensity;
 }

 gl_FragColor.a *= fade;
}

@end`,dn=$.Z.vec3;function ll(e){return e>0?1:-1}m.Shader.import(sl);var hl=m.Mesh.extend(function(){var e=new m.Material({shader:new m.Shader(m.Shader.source("ecgl.trail2.vertex"),m.Shader.source("ecgl.trail2.fragment")),transparent:!0,depthMask:!1}),t=new Ze({dynamic:!0});return t.createAttribute("dist","float",1),t.createAttribute("distAll","float",1),t.createAttribute("start","float",1),{geometry:t,material:e,culling:!1,$ignorePicking:!0}},{updateData:function(e,t,i){var r=e.hostModel,n=this.geometry,a=r.getModel("effect"),o=a.get("trailWidth")*t.getDevicePixelRatio(),s=a.get("trailLength"),l=r.get("effect.constantSpeed"),h=r.get("effect.period")*1e3,u=l!=null;u?this.material.set("speed",l/1e3):this.material.set("period",h),this.material[u?"define":"undefine"]("vertex","CONSTANT_SPEED");var f=r.get("polyline");n.trailLength=s,this.material.set("trailLength",s),n.resetOffset(),["position","positionPrev","positionNext"].forEach(function(L){n.attributes[L].value=i.attributes[L].value});var c=["dist","distAll","start","offset","color"];c.forEach(function(L){n.attributes[L].init(n.vertexCount)}),n.indices=i.indices;var d=[],v=a.get("trailColor"),p=a.get("trailOpacity"),g=v!=null,x=p!=null;this.updateWorldTransform();var y=this.worldTransform.x.len(),T=this.worldTransform.y.len(),w=this.worldTransform.z.len(),S=0,b=0;e.each(function(L){var D=e.getItemLayout(L),P=x?p:ae(e,L),M=ne(e,L);P==null&&(P=1),d=m.parseColor(g?v:M,d),d[3]*=P;for(var E=f?i.getPolylineVertexCount(D):i.getCubicCurveVertexCount(D[0],D[1],D[2],D[3]),N=0,F=[],O=[],z=S;z<S+E;z++)n.attributes.position.get(z,F),F[0]*=y,F[1]*=T,F[2]*=w,z>S&&(N+=dn.dist(F,O)),n.attributes.dist.set(z,N),dn.copy(O,F);b=Math.max(b,N);for(var V=Math.random()*(u?N:h),z=S;z<S+E;z++)n.attributes.distAll.set(z,N),n.attributes.start.set(z,V),n.attributes.offset.set(z,ll(i.attributes.offset.get(z))*o/2),n.attributes.color.set(z,d);S+=E}),this.material.set("spotSize",b*.1*s),this.material.set("spotIntensity",a.get("spotIntensity")),n.dirty()},setAnimationTime:function(e){this.material.set("time",e)}});m.Shader.import(Vt);function ul(e){return e.radius!=null?e.radius:e.size!=null?Math.max(e.size[0],e.size[1],e.size[2]):100}var fl=_.TA.extend({type:"lines3D",__ecgl__:!0,init:function(e,t){this.groupGL=new m.Node,this._meshLinesMaterial=new m.Material({shader:m.createShader("ecgl.meshLines3D"),transparent:!0,depthMask:!1}),this._linesMesh=new m.Mesh({geometry:new Ze,material:this._meshLinesMaterial,$ignorePicking:!0}),this._trailMesh=new hl},render:function(e,t,i){this.groupGL.add(this._linesMesh);var r=e.coordinateSystem,n=e.getData();if(r&&r.viewGL){var a=r.viewGL;a.add(this.groupGL),this._updateLines(e,t,i);var o=r.viewGL.isLinearSpace()?"define":"undefine";this._linesMesh.material[o]("fragment","SRGB_DECODE"),this._trailMesh.material[o]("fragment","SRGB_DECODE")}var s=this._trailMesh;if(s.stopAnimation(),e.get("effect.show")){this.groupGL.add(s),s.updateData(n,i,this._linesMesh.geometry),s.__time=s.__time||0;var l=3600*1e3;this._curveEffectsAnimator=s.animate("",{loop:!0}).when(l,{__time:l}).during(function(){s.setAnimationTime(s.__time)}).start()}else this.groupGL.remove(s),this._curveEffectsAnimator=null;this._linesMesh.material.blend=this._trailMesh.material.blend=e.get("blendMode")==="lighter"?m.additiveBlend:null},pauseEffect:function(){this._curveEffectsAnimator&&this._curveEffectsAnimator.pause()},resumeEffect:function(){this._curveEffectsAnimator&&this._curveEffectsAnimator.resume()},toggleEffect:function(){var e=this._curveEffectsAnimator;e&&(e.isPaused()?e.resume():e.pause())},_updateLines:function(e,t,i){var r=e.getData(),n=e.coordinateSystem,a=this._linesMesh.geometry,o=e.get("polyline");a.expandLine=!0;var s=ul(n);a.segmentScale=s/20;var l="lineStyle.width".split("."),h=i.getDevicePixelRatio(),u=0;r.each(function(v){var p=r.getItemModel(v),g=p.get(l);g==null&&(g=1),r.setItemVisual(v,"lineWidth",g),u=Math.max(g,u)}),a.useNativeLine=!1;var f=0,c=0;r.each(function(v){var p=r.getItemLayout(v);o?(f+=a.getPolylineVertexCount(p),c+=a.getPolylineTriangleCount(p)):(f+=a.getCubicCurveVertexCount(p[0],p[1],p[2],p[3]),c+=a.getCubicCurveTriangleCount(p[0],p[1],p[2],p[3]))}),a.setVertexCount(f),a.setTriangleCount(c),a.resetOffset();var d=[];r.each(function(v){var p=r.getItemLayout(v),g=ne(r,v),x=ae(r,v),y=r.getItemVisual(v,"lineWidth")*h;x==null&&(x=1),d=m.parseColor(g,d),d[3]*=x,o?a.addPolyline(p,d,y):a.addCubicCurve(p[0],p[1],p[2],p[3],d,y)}),a.dirty()},remove:function(){this.groupGL.removeAll()},dispose:function(){this.groupGL.removeAll()}});function cl(e){e.registerChartView(fl),e.registerSeriesModel(ol),e.registerLayout(al),e.registerAction({type:"lines3DPauseEffect",event:"lines3deffectpaused",update:"series.lines3D:pauseEffect"},function(){}),e.registerAction({type:"lines3DResumeEffect",event:"lines3deffectresumed",update:"series.lines3D:resumeEffect"},function(){}),e.registerAction({type:"lines3DToggleEffect",event:"lines3deffectchanged",update:"series.lines3D:toggleEffect"},function(){})}(0,_.D$)(cl);function vn(e,t){for(var i=[],r=0;r<t.length;r++)i.push(e.dataToPoint(t[r]));return i}var pn=_.wJ.extend({type:"series.polygons3D",getRegionModel:function(e){return this.getData().getItemModel(e)},getRegionPolygonCoords:function(e){var t=this.coordinateSystem,i=this.getData().getItemModel(e),r=i.option instanceof Array?i.option:i.getShallow("coords");i.get("multiPolygon")||(r=[r]);for(var n=[],a=0;a<r.length;a++){for(var o=[],s=1;s<r[a].length;s++)o.push(vn(t,r[a][s]));n.push({exterior:vn(t,r[a][0]),interiors:o})}return n},getInitialData:function(e){var t=new _.aV(["value"],this);return t.hasItemOption=!1,t.initData(e.data,[],function(i,r,n,a){if(i instanceof Array)return NaN;t.hasItemOption=!0;var o=i.value;if(o!=null)return o instanceof Array?o[a]:o}),t},defaultOption:{show:!0,data:null,multiPolygon:!1,progressiveThreshold:1e3,progressive:1e3,zlevel:-10,label:{show:!1,distance:2,textStyle:{fontSize:20,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:4}},itemStyle:{color:"#fff",borderWidth:0,borderColor:"#333"},emphasis:{itemStyle:{color:"#639fc0"},label:{show:!0}}}});_.D5.merge(pn.prototype,it);var dl=pn,vl=_.TA.extend({type:"polygons3D",__ecgl__:!0,init:function(e,t){this.groupGL=new m.Node,this._geo3DBuilderList=[],this._currentStep=0},render:function(e,t,i){this.groupGL.removeAll();var r=e.coordinateSystem;r&&r.viewGL&&r.viewGL.add(this.groupGL);var n=this._geo3DBuilderList[0];n||(n=new Qt(i),n.extrudeY=r.type!=="mapbox3D"&&r.type!=="maptalks3D",this._geo3DBuilderList[0]=n),this._updateShaderDefines(r,n),n.update(e,t,i),this._geo3DBuilderList.length=1,this.groupGL.add(n.rootNode)},incrementalPrepareRender:function(e,t,i){this.groupGL.removeAll();var r=e.coordinateSystem;r&&r.viewGL&&r.viewGL.add(this.groupGL),this._currentStep=0},incrementalRender:function(e,t,i,r){var n=this._geo3DBuilderList[this._currentStep],a=t.coordinateSystem;n||(n=new Qt(r),n.extrudeY=a.type!=="mapbox3D"&&a.type!=="maptalks3D",this._geo3DBuilderList[this._currentStep]=n),n.update(t,i,r,e.start,e.end),this.groupGL.add(n.rootNode),this._updateShaderDefines(a,n),this._currentStep++},_updateShaderDefines:function(e,t){var i=e.viewGL.isLinearSpace()?"define":"undefine";t.rootNode.traverse(function(r){r.material&&(r.material[i]("fragment","SRGB_DECODE"),(e.type==="mapbox3D"||e.type==="maptalks3D")&&(r.material.define("fragment","NORMAL_UP_AXIS",2),r.material.define("fragment","NORMAL_FRONT_AXIS",1)))})},remove:function(){this.groupGL.removeAll()},dispose:function(){this.groupGL.removeAll(),this._geo3DBuilderList.forEach(function(e){e.dispose()})}});function pl(e){e.registerChartView(vl),e.registerSeriesModel(dl)}(0,_.D$)(pl);var mn=_.wJ.extend({type:"series.surface",dependencies:["globe","grid3D","geo3D"],visualStyleAccessPath:"itemStyle",formatTooltip:function(e){return Tt(this,e)},getInitialData:function(e,t){var i=e.data;function r(U){return!(isNaN(U.min)||isNaN(U.max)||isNaN(U.step))}function n(U){var C=_.Rx.getPrecisionSafe;return Math.max(C(U.min),C(U.max),C(U.step))+1}if(!i)if(e.parametric){var w=e.parametricEquation||{},S=w.u||{},b=w.v||{};["u","v"].forEach(function(C){r(w[C])}),["x","y","z"].forEach(function(C){w[C]});var L=Math.floor((S.max+S.step-S.min)/S.step),D=Math.floor((b.max+b.step-b.min)/b.step);i=new Float32Array(L*D*5);for(var P=n(S),M=n(b),c=0,d=0;d<D;d++)for(var v=0;v<L;v++){var E=v*S.step+S.min,N=d*b.step+b.min,F=_.Rx.round(Math.min(E,S.max),P),O=_.Rx.round(Math.min(N,b.max),M),p=w.x(F,O),g=w.y(F,O),T=w.z(F,O);i[c++]=p,i[c++]=g,i[c++]=T,i[c++]=F,i[c++]=O}}else{var a=e.equation||{},o=a.x||{},s=a.y||{};if(["x","y"].forEach(function(U){r(a[U])}),typeof a.z!="function")return;var l=Math.floor((o.max+o.step-o.min)/o.step),h=Math.floor((s.max+s.step-s.min)/s.step);i=new Float32Array(l*h*3);for(var u=n(o),f=n(s),c=0,d=0;d<h;d++)for(var v=0;v<l;v++){var p=v*o.step+o.min,g=d*s.step+s.min,x=_.Rx.round(Math.min(p,o.max),u),y=_.Rx.round(Math.min(g,s.max),f),T=a.z(x,y);i[c++]=x,i[c++]=y,i[c++]=T}}var z=["x","y","z"];e.parametric&&z.push("u","v");var V=Jt(this,z,i);return V},defaultOption:{coordinateSystem:"cartesian3D",zlevel:-10,grid3DIndex:0,shading:"lambert",parametric:!1,wireframe:{show:!0,lineStyle:{color:"rgba(0,0,0,0.5)",width:1}},equation:{x:{min:-1,max:1,step:.1},y:{min:-1,max:1,step:.1},z:null},parametricEquation:{u:{min:-1,max:1,step:.1},v:{min:-1,max:1,step:.1},x:null,y:null,z:null},dataShape:null,itemStyle:{},animationDurationUpdate:500}});_.D5.merge(mn.prototype,it);var ml=mn,Qe=$.Z.vec3;function gl(e){return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])}var _l=_.TA.extend({type:"surface",__ecgl__:!0,init:function(e,t){this.groupGL=new m.Node},render:function(e,t,i){var r=this._prevSurfaceMesh;this._prevSurfaceMesh=this._surfaceMesh,this._surfaceMesh=r,this._surfaceMesh||(this._surfaceMesh=this._createSurfaceMesh()),this.groupGL.remove(this._prevSurfaceMesh),this.groupGL.add(this._surfaceMesh);var n=e.coordinateSystem,a=e.get("shading"),o=e.getData(),s="ecgl."+a;if((!this._surfaceMesh.material||this._surfaceMesh.material.shader.name!==s)&&(this._surfaceMesh.material=m.createMaterial(s,["VERTEX_COLOR","DOUBLE_SIDED"])),m.setMaterialFromModel(a,this._surfaceMesh.material,e,i),n&&n.viewGL){n.viewGL.add(this.groupGL);var l=n.viewGL.isLinearSpace()?"define":"undefine";this._surfaceMesh.material[l]("fragment","SRGB_DECODE")}var h=e.get("parametric"),u=e.get("dataShape");u||(u=this._getDataShape(o,h));var f=e.getModel("wireframe"),c=f.get("lineStyle.width"),d=f.get("show")&&c>0;this._updateSurfaceMesh(this._surfaceMesh,e,u,d);var v=this._surfaceMesh.material;d?(v.define("WIREFRAME_QUAD"),v.set("wireframeLineWidth",c),v.set("wireframeLineColor",m.parseColor(f.get("lineStyle.color")))):v.undefine("WIREFRAME_QUAD"),this._initHandler(e,i),this._updateAnimation(e)},_updateAnimation:function(e){m.updateVertexAnimation([["prevPosition","position"],["prevNormal","normal"]],this._prevSurfaceMesh,this._surfaceMesh,e)},_createSurfaceMesh:function(){var e=new m.Mesh({geometry:new m.Geometry({dynamic:!0,sortTriangles:!0}),shadowDepthMaterial:new m.Material({shader:new m.Shader(m.Shader.source("ecgl.sm.depth.vertex"),m.Shader.source("ecgl.sm.depth.fragment"))}),culling:!1,renderOrder:10,renderNormal:!0});return e.geometry.createAttribute("barycentric","float",4),e.geometry.createAttribute("prevPosition","float",3),e.geometry.createAttribute("prevNormal","float",3),Object.assign(e.geometry,Ti),e},_initHandler:function(e,t){var i=e.getData(),r=this._surfaceMesh,n=e.coordinateSystem;function a(s,l){for(var h=1/0,u=-1,f=[],c=0;c<s.length;c++){r.geometry.attributes.position.get(s[c],f);var d=Qe.dist(l.array,f);d<h&&(h=d,u=s[c])}return u}r.seriesIndex=e.seriesIndex;var o=-1;r.off("mousemove"),r.off("mouseout"),r.on("mousemove",function(s){var l=a(s.triangle,s.point);if(l>=0){var h=[];r.geometry.attributes.position.get(l,h);for(var u=n.pointToData(h),f=1/0,c=-1,d=[],v=0;v<i.count();v++){d[0]=i.get("x",v),d[1]=i.get("y",v),d[2]=i.get("z",v);var p=Qe.squaredDistance(d,u);p<f&&(c=v,f=p)}c!==o&&t.dispatchAction({type:"grid3DShowAxisPointer",value:u}),o=c,r.dataIndex=c}else r.dataIndex=-1},this),r.on("mouseout",function(s){o=-1,r.dataIndex=-1,t.dispatchAction({type:"grid3DHideAxisPointer"})},this)},_updateSurfaceMesh:function(e,t,i,r){var n=e.geometry,a=t.getData(),o=a.getLayout("points"),s=0;a.each(function(re){a.hasValue(re)||s++});var l=s||r,h=n.attributes.position,u=n.attributes.normal,f=n.attributes.texcoord0,c=n.attributes.barycentric,d=n.attributes.color,v=i[0],p=i[1],g=t.get("shading"),x=g!=="color";if(l){var y=(v-1)*(p-1)*4;h.init(y),r&&c.init(y)}else h.value=new Float32Array(o);d.init(n.vertexCount),f.init(n.vertexCount);var T=[0,3,1,1,3,2],w=[[1,1,0,0],[0,1,0,1],[1,0,0,1],[1,0,1,0]],S=n.indices=new(n.vertexCount>65535?Uint32Array:Uint16Array)((v-1)*(p-1)*6),b=function(re,De,de){de[1]=re*p+De,de[0]=re*p+De+1,de[3]=(re+1)*p+De+1,de[2]=(re+1)*p+De},L=!1;if(l){var D=[],P=[],M=0;x?u.init(n.vertexCount):u.value=null;for(var E=[[],[],[]],N=[],F=[],O=Qe.create(),z=function(re,De,de){var Wi=De*3;return de[0]=re[Wi],de[1]=re[Wi+1],de[2]=re[Wi+2],de},V=new Float32Array(o.length),U=new Float32Array(o.length/3*4),C=0;C<a.count();C++)if(a.hasValue(C)){var oe=m.parseColor(ne(a,C)),J=ae(a,C);J!=null&&(oe[3]*=J),oe[3]<.99&&(L=!0);for(var I=0;I<4;I++)U[C*4+I]=oe[I]}for(var ie=[1e7,1e7,1e7],C=0;C<v-1;C++)for(var K=0;K<p-1;K++){var ce=C*(p-1)+K,he=ce*4;b(C,K,D);for(var k=!1,I=0;I<4;I++)z(o,D[I],P),gl(P)&&(k=!0);for(var I=0;I<4;I++)k?h.set(he+I,ie):(z(o,D[I],P),h.set(he+I,P)),r&&c.set(he+I,w[I]);for(var I=0;I<6;I++)S[M++]=T[I]+he;if(x&&!k)for(var I=0;I<2;I++){for(var Me=I*3,q=0;q<3;q++){var pe=D[T[Me]+q];z(o,pe,E[q])}Qe.sub(N,E[0],E[1]),Qe.sub(F,E[1],E[2]),Qe.cross(O,N,F);for(var q=0;q<3;q++){var ye=D[T[Me]+q]*3;V[ye]=V[ye]+O[0],V[ye+1]=V[ye+1]+O[1],V[ye+2]=V[ye+2]+O[2]}}}if(x)for(var C=0;C<V.length/3;C++)z(V,C,O),Qe.normalize(O,O),V[C*3]=O[0],V[C*3+1]=O[1],V[C*3+2]=O[2];for(var oe=[],se=[],C=0;C<v-1;C++)for(var K=0;K<p-1;K++){var ce=C*(p-1)+K,he=ce*4;b(C,K,D);for(var I=0;I<4;I++){for(var q=0;q<4;q++)oe[q]=U[D[I]*4+q];d.set(he+I,oe),x&&(z(V,D[I],O),u.set(he+I,O));var pe=D[I];se[0]=pe%p/(p-1),se[1]=Math.floor(pe/p)/(v-1),f.set(he+I,se)}ce++}}else{for(var se=[],C=0;C<a.count();C++){se[0]=C%p/(p-1),se[1]=Math.floor(C/p)/(v-1);var oe=m.parseColor(ne(a,C)),J=ae(a,C);J!=null&&(oe[3]*=J),oe[3]<.99&&(L=!0),d.set(C,oe),f.set(C,se)}for(var D=[],Ct=0,C=0;C<v-1;C++)for(var K=0;K<p-1;K++){b(C,K,D);for(var I=0;I<6;I++)S[Ct++]=D[T[I]]}x?n.generateVertexNormals():u.value=null}e.material.get("normalMap")&&n.generateTangents(),n.updateBoundingBox(),n.dirty(),e.material.transparent=L,e.material.depthMask=!L},_getDataShape:function(e,t){for(var i=-1/0,r=0,n=0,a=0,o=!1,s=t?"u":"x",l=e.count(),h=0;h<l;h++){var u=e.get(s,h);u<i&&(a=n,n=0,r++),i=u,n++}if((!r||n===1)&&(o=!0),!o)return[r+1,n];for(var f=Math.floor(Math.sqrt(l));f>0;){if(Math.floor(l/f)===l/f)return[f,l/f];f--}return f=Math.floor(Math.sqrt(l)),[f,f]},dispose:function(){this.groupGL.removeAll()},remove:function(){this.groupGL.removeAll()}});function xl(e){e.registerChartView(_l),e.registerSeriesModel(ml),e.registerLayout(function(t,i){t.eachSeriesByType("surface",function(r){var n=r.coordinateSystem;!n||n.type;var a=r.getData(),o=new Float32Array(3*a.count()),s=[NaN,NaN,NaN];if(n&&n.type==="cartesian3D"){var l=n.dimensions,h=l.map(function(u){return r.coordDimToDataDim(u)[0]});a.each(h,function(u,f,c,d){var v;a.hasValue(d)?v=n.dataToPoint([u,f,c]):v=s,o[d*3]=v[0],o[d*3+1]=v[1],o[d*3+2]=v[2]})}a.setLayout("points",o)})})}(0,_.D$)(xl);function gn(e,t){for(var i=[],r=0;r<t.length;r++)i.push(e.dataToPoint(t[r]));return i}var lt=_.wJ.extend({type:"series.map3D",layoutMode:"box",coordinateSystem:null,visualStyleAccessPath:"itemStyle",optionUpdated:function(e){e=e||{};var t=this.get("coordinateSystem");if(!(t==null||t==="geo3D")){if(!1)var i,r;this.get("groundPlane.show")&&(this.option.groundPlane.show=!1),this._geo=null}},getInitialData:function(e){e.data=this.getFilledRegions(e.data,e.map);var t=_._y.createDimensions(e.data,{coordDimensions:["value"]}),i=new _.aV(t,this);i.initData(e.data);var r={};return i.each(function(n){var a=i.getName(n),o=i.getItemModel(n);r[a]=o}),this._regionModelMap=r,i},formatTooltip:function(e){return Tt(this,e)},getRegionModel:function(e){var t=this.getData().getName(e);return this._regionModelMap[t]||new _.Hn(null,this)},getRegionPolygonCoords:function(e){var t=this.coordinateSystem,i=this.getData().getName(e);if(t.transform){var r=t.getRegion(i);return r?r.geometries:[]}else{this._geo||(this._geo=Fr.createGeo3D(this));for(var r=this._geo.getRegion(i),n=[],a=0;a<r.geometries.length;a++){var o=r.geometries[a],s=[],l=gn(t,o.exterior);if(s&&s.length)for(var h=0;h<o.interiors.length;h++)s.push(gn(t,s[h]));n.push({interiors:s,exterior:l})}return n}},getFormattedLabel:function(e,t){var i=st.getFormattedLabel(this,e,t);return i==null&&(i=this.getData().getName(e)),i},defaultOption:{coordinateSystem:"geo3D",data:null}});_.D5.merge(lt.prototype,br),_.D5.merge(lt.prototype,zt),_.D5.merge(lt.prototype,$e),_.D5.merge(lt.prototype,Je),_.D5.merge(lt.prototype,it);var yl=lt,wl=_.TA.extend({type:"map3D",__ecgl__:!0,init:function(e,t){this._geo3DBuilder=new Qt(t),this.groupGL=new m.Node},render:function(e,t,i){var r=e.coordinateSystem;if(!(!r||!r.viewGL)){this.groupGL.add(this._geo3DBuilder.rootNode),r.viewGL.add(this.groupGL);var n;if(r.type==="geo3D"){n=r,this._sceneHelper||(this._sceneHelper=new qe,this._sceneHelper.initLight(this.groupGL)),this._sceneHelper.setScene(r.viewGL.scene),this._sceneHelper.updateLight(e),r.viewGL.setPostEffect(e.getModel("postEffect"),i),r.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling"));var a=this._control;a||(a=this._control=new Bt({zr:i.getZr()}),this._control.init());var o=e.getModel("viewControl");a.setViewGL(r.viewGL),a.setFromViewControlModel(o,0),a.off("update"),a.on("update",function(){i.dispatchAction({type:"map3DChangeCamera",alpha:a.getAlpha(),beta:a.getBeta(),distance:a.getDistance(),from:this.uid,map3DId:e.id})}),this._geo3DBuilder.extrudeY=!0}else this._control&&(this._control.dispose(),this._control=null),this._sceneHelper&&(this._sceneHelper.dispose(),this._sceneHelper=null),n=e.getData().getLayout("geo3D"),this._geo3DBuilder.extrudeY=!1;this._geo3DBuilder.update(e,t,i,0,e.getData().count());var s=r.viewGL.isLinearSpace()?"define":"undefine";this._geo3DBuilder.rootNode.traverse(function(l){l.material&&l.material[s]("fragment","SRGB_DECODE")})}},afterRender:function(e,t,i,r){var n=r.renderer,a=e.coordinateSystem;a&&a.type==="geo3D"&&(this._sceneHelper.updateAmbientCubemap(n,e,i),this._sceneHelper.updateSkybox(n,e,i))},dispose:function(){this.groupGL.removeAll(),this._control.dispose(),this._geo3DBuilder.dispose()}});function Tl(e){Br(e),e.registerChartView(wl),e.registerSeriesModel(yl),e.registerAction({type:"map3DChangeCamera",event:"map3dcamerachanged",update:"series:updateCamera"},function(t,i){i.eachComponent({mainType:"series",subType:"map3D",query:t},function(r){r.setView(t)})})}(0,_.D$)(Tl);var bl=_.wJ.extend({type:"series.scatterGL",dependencies:["grid","polar","geo","singleAxis"],visualStyleAccessPath:"itemStyle",hasSymbolVisual:!0,getInitialData:function(){return _._y.createList(this)},defaultOption:{coordinateSystem:"cartesian2d",zlevel:10,progressive:1e5,progressiveThreshold:1e5,large:!1,symbol:"circle",symbolSize:10,zoomScale:0,blendMode:"source-over",itemStyle:{opacity:.8},postEffect:{enable:!1,colorCorrection:{exposure:0,brightness:0,contrast:1,saturation:1,enable:!0}}}}),_n=A(58427),xn=A(85755);function Fe(e){this.viewGL=e}Fe.prototype.reset=function(e,t){this._updateCamera(t.getWidth(),t.getHeight(),t.getDevicePixelRatio()),this._viewTransform=_n.Ue(),this.updateTransform(e,t)},Fe.prototype.updateTransform=function(e,t){var i=e.coordinateSystem;i.getRoamTransform&&(_n.U_(this._viewTransform,i.getRoamTransform()),this._setCameraTransform(this._viewTransform),t.getZr().refresh())},Fe.prototype.dataToPoint=function(e,t,i){i=e.dataToPoint(t,null,i);var r=this._viewTransform;r&&xn.Ne(i,i,r)},Fe.prototype.removeTransformInPoint=function(e){return this._viewTransform&&xn.Ne(e,e,this._viewTransform),e},Fe.prototype.getZoom=function(){if(this._viewTransform){var e=this._viewTransform;return 1/Math.max(Math.sqrt(e[0]*e[0]+e[1]*e[1]),Math.sqrt(e[2]*e[2]+e[3]*e[3]))}return 1},Fe.prototype._setCameraTransform=function(e){var t=this.viewGL.camera;t.position.set(e[4],e[5],0),t.scale.set(Math.sqrt(e[0]*e[0]+e[1]*e[1]),Math.sqrt(e[2]*e[2]+e[3]*e[3]),1)},Fe.prototype._updateCamera=function(e,t,i){this.viewGL.setViewport(0,0,e,t,i);var r=this.viewGL.camera;r.left=r.top=0,r.bottom=t,r.right=e,r.near=0,r.far=100};var yn=Fe,Sl=_.TA.extend({type:"scatterGL",__ecgl__:!0,init:function(e,t){this.groupGL=new m.Node,this.viewGL=new Ee("orthographic"),this.viewGL.add(this.groupGL),this._pointsBuilderList=[],this._currentStep=0,this._sizeScale=1,this._glViewHelper=new yn(this.viewGL)},render:function(e,t,i){if(this.groupGL.removeAll(),this._glViewHelper.reset(e,i),!!e.getData().count()){var r=this._pointsBuilderList[0];r||(r=this._pointsBuilderList[0]=new bt(!0,i)),this._pointsBuilderList.length=1,this.groupGL.add(r.rootNode),this._removeTransformInPoints(e.getData().getLayout("points")),r.update(e,t,i),this.viewGL.setPostEffect(e.getModel("postEffect"),i)}},incrementalPrepareRender:function(e,t,i){this.groupGL.removeAll(),this._glViewHelper.reset(e,i),this._currentStep=0,this.viewGL.setPostEffect(e.getModel("postEffect"),i)},incrementalRender:function(e,t,i,r){if(!(e.end<=e.start)){var n=this._pointsBuilderList[this._currentStep];n||(n=new bt(!0,r),this._pointsBuilderList[this._currentStep]=n),this.groupGL.add(n.rootNode),this._removeTransformInPoints(t.getData().getLayout("points")),n.setSizeScale(this._sizeScale),n.update(t,i,r,e.start,e.end),r.getZr().refresh(),this._currentStep++}},updateTransform:function(e,t,i){if(e.coordinateSystem.getRoamTransform){this._glViewHelper.updateTransform(e,i);var r=this._glViewHelper.getZoom(),n=Math.max((e.get("zoomScale")||0)*(r-1)+1,0);this._sizeScale=n,this._pointsBuilderList.forEach(function(a){a.setSizeScale(n)})}},_removeTransformInPoints:function(e){if(e)for(var t=[],i=0;i<e.length;i+=2)t[0]=e[i],t[1]=e[i+1],this._glViewHelper.removeTransformInPoint(t),e[i]=t[0],e[i+1]=t[1]},dispose:function(){this.groupGL.removeAll(),this._pointsBuilderList.forEach(function(e){e.dispose()})},remove:function(){this.groupGL.removeAll()}});function Dl(e){e.registerChartView(Sl),e.registerSeriesModel(bl),e.registerLayout({seriesType:"scatterGL",reset:function(t){var i=t.coordinateSystem,r=t.getData(),n;if(i){var a=i.dimensions.map(function(s){return r.mapDimension(s)}).slice(0,2),o=[];a.length===1?n=function(s){for(var l=new Float32Array((s.end-s.start)*2),h=s.start;h<s.end;h++){var u=(h-s.start)*2,f=r.get(a[0],h),c=i.dataToPoint(f);l[u]=c[0],l[u+1]=c[1]}r.setLayout("points",l)}:a.length===2&&(n=function(s){for(var l=new Float32Array((s.end-s.start)*2),h=s.start;h<s.end;h++){var u=(h-s.start)*2,f=r.get(a[0],h),c=r.get(a[1],h);o[0]=f,o[1]=c,o=i.dataToPoint(o),l[u]=o[0],l[u+1]=o[1]}r.setLayout("points",l)})}return{progress:n}}})}(0,_.D$)(Dl);var Ll=A(91054),Al=A(19438);function Cl(e,t,i,r,n){for(var a=new Ll.ZP(r),o=0;o<e.length;o++)a.addNode(B.firstNotNull(e[o].id,e[o].name,o),o);for(var s=[],l=[],h=0,o=0;o<t.length;o++){var u=t[o],f=u.source,c=u.target;a.addEdge(f,c,h)&&(l.push(u),s.push(B.firstNotNull(u.id,f+" > "+c)),h++)}var d,v=_._y.createDimensions(e,{coordDimensions:["value"]});d=new _.aV(v,i),d.initData(e);var p=new _.aV(["value"],i);return p.initData(l,s),n&&n(d,p),(0,Al.Z)({mainData:d,struct:a,structAttr:"graph",datas:{node:d,edge:p},datasAttr:{node:"data",edge:"edgeData"}}),a.update(),a}var Dt=_.wJ.extend({type:"series.graphGL",visualStyleAccessPath:"itemStyle",hasSymbolVisual:!0,init:function(e){Dt.superApply(this,"init",arguments),this.legendDataProvider=function(){return this._categoriesData},this._updateCategoriesData()},mergeOption:function(e){Dt.superApply(this,"mergeOption",arguments),this._updateCategoriesData()},getFormattedLabel:function(e,t,i,r){var n=st.getFormattedLabel(this,e,t,i,r);if(n==null){var a=this.getData(),o=a.dimensions[a.dimensions.length-1];n=a.get(o,e)}return n},getInitialData:function(e,t){var i=e.edges||e.links||[],r=e.data||e.nodes||[],n=this;if(r&&i)return Cl(r,i,this,!0,a).data;function a(o,s){o.wrapMethod("getItemModel",function(f){const c=n._categoriesModels,d=f.getShallow("category"),v=c[d];return v&&(v.parentModel=f.parentModel,f.parentModel=v),f});const l=t.getModel([]).getModel;function h(f,c){const d=l.call(this,f,c);return d.resolveParentPath=u,d}s.wrapMethod("getItemModel",function(f){return f.resolveParentPath=u,f.getModel=h,f});function u(f){if(f&&(f[0]==="label"||f[1]==="label")){const c=f.slice();return f[0]==="label"?c[0]="edgeLabel":f[1]==="label"&&(c[1]="edgeLabel"),c}return f}}},getGraph:function(){return this.getData().graph},getEdgeData:function(){return this.getGraph().edgeData},getCategoriesData:function(){return this._categoriesData},formatTooltip:function(e,t,i){if(i==="edge"){var r=this.getData(),n=this.getDataParams(e,i),a=r.graph.getEdgeByIndex(e),o=r.getName(a.node1.dataIndex),s=r.getName(a.node2.dataIndex),l=[];return o!=null&&l.push(o),s!=null&&l.push(s),l=_.WU.encodeHTML(l.join(" > ")),n.value&&(l+=" : "+_.WU.encodeHTML(n.value)),l}else return Dt.superApply(this,"formatTooltip",arguments)},_updateCategoriesData:function(){var e=(this.option.categories||[]).map(function(i){return i.value!=null?i:Object.assign({value:0},i)}),t=new _.aV(["value"],this);t.initData(e),this._categoriesData=t,this._categoriesModels=t.mapArray(function(i){return t.getItemModel(i,!0)})},setView:function(e){e.zoom!=null&&(this.option.zoom=e.zoom),e.offset!=null&&(this.option.offset=e.offset)},setNodePosition:function(e){for(var t=0;t<e.length/2;t++){var i=e[t*2],r=e[t*2+1],n=this.getData().getRawDataItem(t);n.x=i,n.y=r}},isAnimationEnabled:function(){return Dt.superCall(this,"isAnimationEnabled")&&!(this.get("layout")==="force"&&this.get("force.layoutAnimation"))},defaultOption:{zlevel:10,z:2,legendHoverLink:!0,layout:"forceAtlas2",forceAtlas2:{initLayout:null,GPU:!0,steps:1,maxSteps:1e3,repulsionByDegree:!0,linLogMode:!1,strongGravityMode:!1,gravity:1,edgeWeightInfluence:1,edgeWeight:[1,4],nodeWeight:[1,4],preventOverlap:!1,gravityCenter:null},focusNodeAdjacency:!0,focusNodeAdjacencyOn:"mouseover",left:"center",top:"center",symbol:"circle",symbolSize:5,roam:!1,center:null,zoom:1,label:{show:!1,formatter:"{b}",position:"right",distance:5,textStyle:{fontSize:14}},itemStyle:{},lineStyle:{color:"#aaa",width:1,opacity:.5},emphasis:{label:{show:!0}},animation:!1}}),Pl=Dt,te=$.Z.vec2,wn=[[0,0],[1,1]],Tn=H.Z.extend(function(){return{segmentScale:4,dynamic:!0,useNativeLine:!0,attributes:{position:new H.Z.Attribute("position","float",2,"POSITION"),normal:new H.Z.Attribute("normal","float",2),offset:new H.Z.Attribute("offset","float",1),color:new H.Z.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0,this._itemVertexOffsets=[]},setVertexCount:function(e){var t=this.attributes;this.vertexCount!==e&&(t.position.init(e),t.color.init(e),this.useNativeLine||(t.offset.init(e),t.normal.init(e)),e>65535?this.indices instanceof Uint16Array&&(this.indices=new Uint32Array(this.indices)):this.indices instanceof Uint32Array&&(this.indices=new Uint16Array(this.indices)))},setTriangleCount:function(e){this.triangleCount!==e&&(e===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(e*3):new Uint16Array(e*3))},_getCubicCurveApproxStep:function(e,t,i,r){var n=te.dist(e,t)+te.dist(i,t)+te.dist(r,i),a=1/(n+1)*this.segmentScale;return a},getCubicCurveVertexCount:function(e,t,i,r){var n=this._getCubicCurveApproxStep(e,t,i,r),a=Math.ceil(1/n);return this.useNativeLine?a*2:a*2+2},getCubicCurveTriangleCount:function(e,t,i,r){var n=this._getCubicCurveApproxStep(e,t,i,r),a=Math.ceil(1/n);return this.useNativeLine?0:a*2},getLineVertexCount:function(){return this.getPolylineVertexCount(wn)},getLineTriangleCount:function(){return this.getPolylineTriangleCount(wn)},getPolylineVertexCount:function(e){var t;if(typeof e=="number")t=e;else{var i=typeof e[0]!="number";t=i?e.length:e.length/2}return this.useNativeLine?(t-1)*2:(t-1)*2+2},getPolylineTriangleCount:function(e){var t;if(typeof e=="number")t=e;else{var i=typeof e[0]!="number";t=i?e.length:e.length/2}return this.useNativeLine?0:(t-1)*2},addCubicCurve:function(e,t,i,r,n,a){a==null&&(a=1);for(var o=e[0],s=e[1],l=t[0],h=t[1],u=i[0],f=i[1],c=r[0],d=r[1],v=this._getCubicCurveApproxStep(e,t,i,r),p=v*v,g=p*v,x=3*v,y=3*p,T=6*p,w=6*g,S=o-l*2+u,b=s-h*2+f,L=(l-u)*3-o+c,D=(h-f)*3-s+d,P=o,M=s,E=(l-o)*x+S*y+L*g,N=(h-s)*x+b*y+D*g,F=S*T+L*w,O=b*T+D*w,z=L*w,V=D*w,U=0,C=0,J=Math.ceil(1/v),I=new Float32Array((J+1)*3),I=[],ie=0,C=0;C<J+1;C++)I[ie++]=P,I[ie++]=M,P+=E,M+=N,E+=F,N+=O,F+=z,O+=V,U+=v,U>1&&(P=E>0?Math.min(P,c):Math.max(P,c),M=N>0?Math.min(M,d):Math.max(M,d));this.addPolyline(I,n,a)},addLine:function(e,t,i,r){this.addPolyline([e,t],i,r)},addPolyline:function(){var e=te.create(),t=te.create(),i=te.create(),r=te.create(),n=[],a=[],o=[];return function(s,l,h,u,f){if(s.length){var c=typeof s[0]!="number";if(f==null&&(f=c?s.length:s.length/2),!(f<2)){u==null&&(u=0),h==null&&(h=1),this._itemVertexOffsets.push(this._vertexOffset);for(var d=c?typeof l[0]!="number":l.length/4===f,v=this.attributes.position,p=this.attributes.color,g=this.attributes.offset,x=this.attributes.normal,y=this.indices,T=this._vertexOffset,w,S=0;S<f;S++){if(c)n=s[S+u],d?w=l[S+u]:w=l;else{var b=S*2+u;if(n=n||[],n[0]=s[b],n[1]=s[b+1],d){var L=S*4+u;w=w||[],w[0]=l[L],w[1]=l[L+1],w[2]=l[L+2],w[3]=l[L+3]}else w=l}if(this.useNativeLine)S>1&&(v.copy(T,T-1),p.copy(T,T-1),T++);else{var D;if(S<f-1){if(c)te.copy(a,s[S+1]);else{var b=(S+1)*2+u;a=a||[],a[0]=s[b],a[1]=s[b+1]}if(S>0){te.sub(e,n,o),te.sub(t,a,n),te.normalize(e,e),te.normalize(t,t),te.add(r,e,t),te.normalize(r,r);var P=h/2*Math.min(1/te.dot(e,r),2);i[0]=-r[1],i[1]=r[0],D=P}else te.sub(e,a,n),te.normalize(e,e),i[0]=-e[1],i[1]=e[0],D=h/2}else te.sub(e,n,o),te.normalize(e,e),i[0]=-e[1],i[1]=e[0],D=h/2;x.set(T,i),x.set(T+1,i),g.set(T,D),g.set(T+1,-D),te.copy(o,n),v.set(T,n),v.set(T+1,n),p.set(T,w),p.set(T+1,w),T+=2}if(this.useNativeLine)p.set(T,w),v.set(T,n),T++;else if(S>0){var M=this._faceOffset*3,y=this.indices;y[M]=T-4,y[M+1]=T-3,y[M+2]=T-2,y[M+3]=T-3,y[M+4]=T-1,y[M+5]=T-2,this._faceOffset+=2}}this._vertexOffset=T}}}}(),setItemColor:function(e,t){for(var i=this._itemVertexOffsets[e],r=e<this._itemVertexOffsets.length-1?this._itemVertexOffsets[e+1]:this._vertexOffset,n=i;n<r;n++)this.attributes.color.set(n,t);this.dirty("color")}});_.D5.defaults(Tn.prototype,dt);var bn=Tn,Ml=`@export ecgl.forceAtlas2.updateNodeRepulsion

#define NODE_COUNT 0

uniform sampler2D positionTex;

uniform vec2 textureSize;
uniform float gravity;
uniform float scaling;
uniform vec2 gravityCenter;

uniform bool strongGravityMode;
uniform bool preventOverlap;

varying vec2 v_Texcoord;

void main() {

 vec4 n0 = texture2D(positionTex, v_Texcoord);

 vec2 force = vec2(0.0);
 for (int i = 0; i < NODE_COUNT; i++) {
 vec2 uv = vec2(
 mod(float(i), textureSize.x) / (textureSize.x - 1.0),
 floor(float(i) / textureSize.x) / (textureSize.y - 1.0)
 );
 vec4 n1 = texture2D(positionTex, uv);

 vec2 dir = n0.xy - n1.xy;
 float d2 = dot(dir, dir);

 if (d2 > 0.0) {
 float factor = 0.0;
 if (preventOverlap) {
 float d = sqrt(d2);
 d = d - n0.w - n1.w;
 if (d > 0.0) {
 factor = scaling * n0.z * n1.z / (d * d);
 }
 else if (d < 0.0) {
 factor = scaling * 100.0 * n0.z * n1.z;
 }
 }
 else {
 factor = scaling * n0.z * n1.z / d2;
 }
 force += dir * factor;
 }
 }

 vec2 dir = gravityCenter - n0.xy;
 float d = 1.0;
 if (!strongGravityMode) {
 d = length(dir);
 }

 force += dir * n0.z * gravity / (d + 1.0);

 gl_FragColor = vec4(force, 0.0, 1.0);
}
@end

@export ecgl.forceAtlas2.updateEdgeAttraction.vertex

attribute vec2 node1;
attribute vec2 node2;
attribute float weight;

uniform sampler2D positionTex;
uniform float edgeWeightInfluence;
uniform bool preventOverlap;
uniform bool linLogMode;

uniform vec2 windowSize: WINDOW_SIZE;

varying vec2 v_Force;

void main() {

 vec4 n0 = texture2D(positionTex, node1);
 vec4 n1 = texture2D(positionTex, node2);

 vec2 dir = n1.xy - n0.xy;
 float d = length(dir);
 float w;
 if (edgeWeightInfluence == 0.0) {
 w = 1.0;
 }
 else if (edgeWeightInfluence == 1.0) {
 w = weight;
 }
 else {
 w = pow(weight, edgeWeightInfluence);
 }
 vec2 offset = vec2(1.0 / windowSize.x, 1.0 / windowSize.y);
 vec2 scale = vec2((windowSize.x - 1.0) / windowSize.x, (windowSize.y - 1.0) / windowSize.y);
 vec2 pos = node1 * scale * 2.0 - 1.0;
 gl_Position = vec4(pos + offset, 0.0, 1.0);
 gl_PointSize = 1.0;

 float factor;
 if (preventOverlap) {
 d = d - n1.w - n0.w;
 }
 if (d <= 0.0) {
 v_Force = vec2(0.0);
 return;
 }

 if (linLogMode) {
 factor = w * log(d) / d;
 }
 else {
 factor = w;
 }
 v_Force = dir * factor;
}
@end

@export ecgl.forceAtlas2.updateEdgeAttraction.fragment

varying vec2 v_Force;

void main() {
 gl_FragColor = vec4(v_Force, 0.0, 0.0);
}
@end

@export ecgl.forceAtlas2.calcWeightedSum.vertex

attribute vec2 node;

varying vec2 v_NodeUv;

void main() {

 v_NodeUv = node;
 gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
 gl_PointSize = 1.0;
}
@end

@export ecgl.forceAtlas2.calcWeightedSum.fragment

varying vec2 v_NodeUv;

uniform sampler2D positionTex;
uniform sampler2D forceTex;
uniform sampler2D forcePrevTex;

void main() {
 vec2 force = texture2D(forceTex, v_NodeUv).rg;
 vec2 forcePrev = texture2D(forcePrevTex, v_NodeUv).rg;

 float mass = texture2D(positionTex, v_NodeUv).z;
 float swing = length(force - forcePrev) * mass;
 float traction = length(force + forcePrev) * 0.5 * mass;

 gl_FragColor = vec4(swing, traction, 0.0, 0.0);
}
@end

@export ecgl.forceAtlas2.calcGlobalSpeed

uniform sampler2D globalSpeedPrevTex;
uniform sampler2D weightedSumTex;
uniform float jitterTolerence;

void main() {
 vec2 weightedSum = texture2D(weightedSumTex, vec2(0.5)).xy;
 float prevGlobalSpeed = texture2D(globalSpeedPrevTex, vec2(0.5)).x;
 float globalSpeed = jitterTolerence * jitterTolerence
 * weightedSum.y / weightedSum.x;
 if (prevGlobalSpeed > 0.0) {
 globalSpeed = min(globalSpeed / prevGlobalSpeed, 1.5) * prevGlobalSpeed;
 }
 gl_FragColor = vec4(globalSpeed, 0.0, 0.0, 1.0);
}
@end

@export ecgl.forceAtlas2.updatePosition

uniform sampler2D forceTex;
uniform sampler2D forcePrevTex;
uniform sampler2D positionTex;
uniform sampler2D globalSpeedTex;

varying vec2 v_Texcoord;

void main() {
 vec2 force = texture2D(forceTex, v_Texcoord).xy;
 vec2 forcePrev = texture2D(forcePrevTex, v_Texcoord).xy;
 vec4 node = texture2D(positionTex, v_Texcoord);

 float globalSpeed = texture2D(globalSpeedTex, vec2(0.5)).r;
 float swing = length(force - forcePrev);
 float speed = 0.1 * globalSpeed / (0.1 + globalSpeed * sqrt(swing));

 float df = length(force);
 if (df > 0.0) {
 speed = min(df * speed, 10.0) / df;

 gl_FragColor = vec4(node.xy + speed * force, node.zw);
 }
 else {
 gl_FragColor = node;
 }
}
@end

@export ecgl.forceAtlas2.edges.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec2 node;
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;

uniform sampler2D positionTex;

void main()
{
 gl_Position = worldViewProjection * vec4(
 texture2D(positionTex, node).xy, -10.0, 1.0
 );
 v_Color = a_Color;
}
@end

@export ecgl.forceAtlas2.edges.fragment
uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
varying vec4 v_Color;
void main() {
 gl_FragColor = color * v_Color;
}
@end`;m.Shader.import(Ml);var Zi={repulsionByDegree:!0,linLogMode:!1,strongGravityMode:!1,gravity:1,scaling:1,edgeWeightInfluence:1,jitterTolerence:.1,preventOverlap:!1,dissuadeHubs:!1,gravityCenter:null};function le(e){var t={type:m.Texture.FLOAT,minFilter:m.Texture.NEAREST,magFilter:m.Texture.NEAREST};this._positionSourceTex=new m.Texture2D(t),this._positionSourceTex.flipY=!1,this._positionTex=new m.Texture2D(t),this._positionPrevTex=new m.Texture2D(t),this._forceTex=new m.Texture2D(t),this._forcePrevTex=new m.Texture2D(t),this._weightedSumTex=new m.Texture2D(t),this._weightedSumTex.width=this._weightedSumTex.height=1,this._globalSpeedTex=new m.Texture2D(t),this._globalSpeedPrevTex=new m.Texture2D(t),this._globalSpeedTex.width=this._globalSpeedTex.height=1,this._globalSpeedPrevTex.width=this._globalSpeedPrevTex.height=1,this._nodeRepulsionPass=new fe.Z({fragment:m.Shader.source("ecgl.forceAtlas2.updateNodeRepulsion")}),this._positionPass=new fe.Z({fragment:m.Shader.source("ecgl.forceAtlas2.updatePosition")}),this._globalSpeedPass=new fe.Z({fragment:m.Shader.source("ecgl.forceAtlas2.calcGlobalSpeed")}),this._copyPass=new fe.Z({fragment:m.Shader.source("clay.compositor.output")});var i=function(r){r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ONE)};this._edgeForceMesh=new m.Mesh({geometry:new m.Geometry({attributes:{node1:new m.Geometry.Attribute("node1","float",2),node2:new m.Geometry.Attribute("node2","float",2),weight:new m.Geometry.Attribute("weight","float",1)},dynamic:!0,mainAttribute:"node1"}),material:new m.Material({transparent:!0,shader:m.createShader("ecgl.forceAtlas2.updateEdgeAttraction"),blend:i,depthMask:!1,depthText:!1}),mode:m.Mesh.POINTS}),this._weightedSumMesh=new m.Mesh({geometry:new m.Geometry({attributes:{node:new m.Geometry.Attribute("node","float",2)},dynamic:!0,mainAttribute:"node"}),material:new m.Material({transparent:!0,shader:m.createShader("ecgl.forceAtlas2.calcWeightedSum"),blend:i,depthMask:!1,depthText:!1}),mode:m.Mesh.POINTS}),this._framebuffer=new Se.Z({depthBuffer:!1}),this._dummyCamera=new m.OrthographicCamera({left:-1,right:1,top:1,bottom:-1,near:0,far:100}),this._globalSpeed=0}le.prototype.updateOption=function(e){for(var t in Zi)this[t]=Zi[t];var i=this._nodes.length;if(i>5e4?this.jitterTolerence=10:i>5e3?this.jitterTolerence=1:this.jitterTolerence=.1,i>100?this.scaling=2:this.scaling=10,e)for(var t in Zi)e[t]!=null&&(this[t]=e[t]);if(this.repulsionByDegree)for(var r=this._positionSourceTex.pixels,n=0;n<this._nodes.length;n++)r[n*4+2]=(this._nodes[n].degree||0)+1},le.prototype._updateGravityCenter=function(e){var t=this._nodes,i=this._edges;if(this.gravityCenter)this._gravityCenter=this.gravityCenter;else{for(var r=[1/0,1/0],n=[-1/0,-1/0],a=0;a<t.length;a++)r[0]=Math.min(t[a].x,r[0]),r[1]=Math.min(t[a].y,r[1]),n[0]=Math.max(t[a].x,n[0]),n[1]=Math.max(t[a].y,n[1]);this._gravityCenter=[(r[0]+n[0])*.5,(r[1]+n[1])*.5]}for(var a=0;a<i.length;a++){var o=i[a].node1,s=i[a].node2;t[o].degree=(t[o].degree||0)+1,t[s].degree=(t[s].degree||0)+1}},le.prototype.initData=function(e,t){this._nodes=e,this._edges=t,this._updateGravityCenter();var i=Math.ceil(Math.sqrt(e.length)),r=i,n=new Float32Array(i*r*4);this._resize(i,r);for(var a=0,o=0;o<e.length;o++){var s=e[o];n[a++]=s.x||0,n[a++]=s.y||0,n[a++]=s.mass||1,n[a++]=s.size||1}this._positionSourceTex.pixels=n;var l=this._edgeForceMesh.geometry,h=t.length;l.attributes.node1.init(h*2),l.attributes.node2.init(h*2),l.attributes.weight.init(h*2);for(var u=[],o=0;o<t.length;o++){var f=l.attributes,c=t[o].weight;c==null&&(c=1),f.node1.set(o,this.getNodeUV(t[o].node1,u)),f.node2.set(o,this.getNodeUV(t[o].node2,u)),f.weight.set(o,c),f.node1.set(o+h,this.getNodeUV(t[o].node2,u)),f.node2.set(o+h,this.getNodeUV(t[o].node1,u)),f.weight.set(o+h,c)}var d=this._weightedSumMesh.geometry;d.attributes.node.init(e.length);for(var o=0;o<e.length;o++)d.attributes.node.set(o,this.getNodeUV(o,u));l.dirty(),d.dirty(),this._nodeRepulsionPass.material.define("fragment","NODE_COUNT",e.length),this._nodeRepulsionPass.material.setUniform("textureSize",[i,r]),this._inited=!1,this._frame=0},le.prototype.getNodes=function(){return this._nodes},le.prototype.getEdges=function(){return this._edges},le.prototype.step=function(e){this._inited||(this._initFromSource(e),this._inited=!0),this._frame++,this._framebuffer.attach(this._forceTex),this._framebuffer.bind(e);var t=this._nodeRepulsionPass;t.setUniform("strongGravityMode",this.strongGravityMode),t.setUniform("gravity",this.gravity),t.setUniform("gravityCenter",this._gravityCenter),t.setUniform("scaling",this.scaling),t.setUniform("preventOverlap",this.preventOverlap),t.setUniform("positionTex",this._positionPrevTex),t.render(e);var i=this._edgeForceMesh;i.material.set("linLogMode",this.linLogMode),i.material.set("edgeWeightInfluence",this.edgeWeightInfluence),i.material.set("preventOverlap",this.preventOverlap),i.material.set("positionTex",this._positionPrevTex),e.gl.enable(e.gl.BLEND),e.renderPass([i],this._dummyCamera),this._framebuffer.attach(this._weightedSumTex),e.gl.clearColor(0,0,0,0),e.gl.clear(e.gl.COLOR_BUFFER_BIT),e.gl.enable(e.gl.BLEND);var r=this._weightedSumMesh;r.material.set("positionTex",this._positionPrevTex),r.material.set("forceTex",this._forceTex),r.material.set("forcePrevTex",this._forcePrevTex),e.renderPass([r],this._dummyCamera),this._framebuffer.attach(this._globalSpeedTex);var n=this._globalSpeedPass;n.setUniform("globalSpeedPrevTex",this._globalSpeedPrevTex),n.setUniform("weightedSumTex",this._weightedSumTex),n.setUniform("jitterTolerence",this.jitterTolerence),e.gl.disable(e.gl.BLEND),n.render(e);var a=this._positionPass;this._framebuffer.attach(this._positionTex),a.setUniform("globalSpeedTex",this._globalSpeedTex),a.setUniform("positionTex",this._positionPrevTex),a.setUniform("forceTex",this._forceTex),a.setUniform("forcePrevTex",this._forcePrevTex),a.render(e),this._framebuffer.unbind(e),this._swapTexture()},le.prototype.update=function(e,t,i){t==null&&(t=1),t=Math.max(t,1);for(var r=0;r<t;r++)this.step(e);i&&i()},le.prototype.getNodePositionTexture=function(){return this._inited?this._positionPrevTex:this._positionSourceTex},le.prototype.getNodeUV=function(e,t){t=t||[];var i=this._positionTex.width,r=this._positionTex.height;return t[0]=e%i/(i-1),t[1]=Math.floor(e/i)/(r-1)||0,t},le.prototype.getNodePosition=function(e,t){var i=this._positionArr,r=this._positionTex.width,n=this._positionTex.height,a=r*n;(!i||i.length!==a*4)&&(i=this._positionArr=new Float32Array(a*4)),this._framebuffer.bind(e),this._framebuffer.attach(this._positionPrevTex),e.gl.readPixels(0,0,r,n,e.gl.RGBA,e.gl.FLOAT,i),this._framebuffer.unbind(e),t||(t=new Float32Array(this._nodes.length*2));for(var o=0;o<this._nodes.length;o++)t[o*2]=i[o*4],t[o*2+1]=i[o*4+1];return t},le.prototype.getTextureData=function(e,t){var i=this["_"+t+"Tex"],r=i.width,n=i.height;this._framebuffer.bind(e),this._framebuffer.attach(i);var a=new Float32Array(r*n*4);return e.gl.readPixels(0,0,r,n,e.gl.RGBA,e.gl.FLOAT,a),this._framebuffer.unbind(e),a},le.prototype.getTextureSize=function(){return{width:this._positionTex.width,height:this._positionTex.height}},le.prototype.isFinished=function(e){return this._frame>e},le.prototype._swapTexture=function(){var e=this._positionPrevTex;this._positionPrevTex=this._positionTex,this._positionTex=e;var e=this._forcePrevTex;this._forcePrevTex=this._forceTex,this._forceTex=e;var e=this._globalSpeedPrevTex;this._globalSpeedPrevTex=this._globalSpeedTex,this._globalSpeedTex=e},le.prototype._initFromSource=function(e){this._framebuffer.attach(this._positionPrevTex),this._framebuffer.bind(e),this._copyPass.setUniform("texture",this._positionSourceTex),this._copyPass.render(e),e.gl.clearColor(0,0,0,0),this._framebuffer.attach(this._forcePrevTex),e.gl.clear(e.gl.COLOR_BUFFER_BIT),this._framebuffer.attach(this._globalSpeedPrevTex),e.gl.clear(e.gl.COLOR_BUFFER_BIT),this._framebuffer.unbind(e)},le.prototype._resize=function(e,t){["_positionSourceTex","_positionTex","_positionPrevTex","_forceTex","_forcePrevTex"].forEach(function(i){this[i].width=e,this[i].height=t,this[i].dirty()},this)},le.prototype.dispose=function(e){this._framebuffer.dispose(e),this._copyPass.dispose(e),this._nodeRepulsionPass.dispose(e),this._positionPass.dispose(e),this._globalSpeedPass.dispose(e),this._edgeForceMesh.geometry.dispose(e),this._weightedSumMesh.geometry.dispose(e),this._positionSourceTex.dispose(e),this._positionTex.dispose(e),this._positionPrevTex.dispose(e),this._forceTex.dispose(e),this._forcePrevTex.dispose(e),this._weightedSumTex.dispose(e),this._globalSpeedTex.dispose(e),this._globalSpeedPrevTex.dispose(e)};var Hi=le;function El(){var e={create:function(){return new Float32Array(2)},dist:function(l,h){var u=h[0]-l[0],f=h[1]-l[1];return Math.sqrt(u*u+f*f)},len:function(l){var h=l[0],u=l[1];return Math.sqrt(h*h+u*u)},scaleAndAdd:function(l,h,u,f){return l[0]=h[0]+u[0]*f,l[1]=h[1]+u[1]*f,l},scale:function(l,h,u){return l[0]=h[0]*u,l[1]=h[1]*u,l},add:function(l,h,u){return l[0]=h[0]+u[0],l[1]=h[1]+u[1],l},sub:function(l,h,u){return l[0]=h[0]-u[0],l[1]=h[1]-u[1],l},normalize:function(l,h){var u=h[0],f=h[1],c=u*u+f*f;return c>0&&(c=1/Math.sqrt(c),l[0]=h[0]*c,l[1]=h[1]*c),l},negate:function(l,h){return l[0]=-h[0],l[1]=-h[1],l},copy:function(l,h){return l[0]=h[0],l[1]=h[1],l},set:function(l,h,u){return l[0]=h,l[1]=u,l}};function t(){this.subRegions=[],this.nSubRegions=0,this.node=null,this.mass=0,this.centerOfMass=null,this.bbox=new Float32Array(4),this.size=0}var i=t.prototype;i.beforeUpdate=function(){for(var l=0;l<this.nSubRegions;l++)this.subRegions[l].beforeUpdate();this.mass=0,this.centerOfMass&&(this.centerOfMass[0]=0,this.centerOfMass[1]=0),this.nSubRegions=0,this.node=null},i.afterUpdate=function(){this.subRegions.length=this.nSubRegions;for(var l=0;l<this.nSubRegions;l++)this.subRegions[l].afterUpdate()},i.addNode=function(l){if(this.nSubRegions===0)if(this.node==null){this.node=l;return}else this._addNodeToSubRegion(this.node),this.node=null;this._addNodeToSubRegion(l),this._updateCenterOfMass(l)},i.findSubRegion=function(l,h){for(var u=0;u<this.nSubRegions;u++){var f=this.subRegions[u];if(f.contain(l,h))return f}},i.contain=function(l,h){return this.bbox[0]<=l&&this.bbox[2]>=l&&this.bbox[1]<=h&&this.bbox[3]>=h},i.setBBox=function(l,h,u,f){this.bbox[0]=l,this.bbox[1]=h,this.bbox[2]=u,this.bbox[3]=f,this.size=(u-l+f-h)/2},i._newSubRegion=function(){var l=this.subRegions[this.nSubRegions];return l||(l=new t,this.subRegions[this.nSubRegions]=l),this.nSubRegions++,l},i._addNodeToSubRegion=function(l){var h=this.findSubRegion(l.position[0],l.position[1]),u=this.bbox;if(!h){var f=(u[0]+u[2])/2,c=(u[1]+u[3])/2,d=(u[2]-u[0])/2,v=(u[3]-u[1])/2,p=l.position[0]>=f?1:0,g=l.position[1]>=c?1:0,h=this._newSubRegion();h.setBBox(p*d+u[0],g*v+u[1],(p+1)*d+u[0],(g+1)*v+u[1])}h.addNode(l)},i._updateCenterOfMass=function(l){this.centerOfMass==null&&(this.centerOfMass=new Float32Array(2));var h=this.centerOfMass[0]*this.mass,u=this.centerOfMass[1]*this.mass;h+=l.position[0]*l.mass,u+=l.position[1]*l.mass,this.mass+=l.mass,this.centerOfMass[0]=h/this.mass,this.centerOfMass[1]=u/this.mass};function r(){this.position=new Float32Array(2),this.force=e.create(),this.forcePrev=e.create(),this.mass=1,this.inDegree=0,this.outDegree=0}function n(l,h){this.source=l,this.target=h,this.weight=1}function a(){this.autoSettings=!0,this.barnesHutOptimize=!0,this.barnesHutTheta=1.5,this.repulsionByDegree=!0,this.linLogMode=!1,this.strongGravityMode=!1,this.gravity=1,this.scaling=1,this.edgeWeightInfluence=1,this.jitterTolerence=.1,this.preventOverlap=!1,this.dissuadeHubs=!1,this.rootRegion=new t,this.rootRegion.centerOfMass=e.create(),this.nodes=[],this.edges=[],this.bbox=new Float32Array(4),this.gravityCenter=null,this._massArr=null,this._swingingArr=null,this._sizeArr=null,this._globalSpeed=0}var o=a.prototype;o.initNodes=function(l,h,u){var f=h.length;this.nodes.length=0;for(var c=typeof u!="undefined",d=0;d<f;d++){var v=new r;v.position[0]=l[d*2],v.position[1]=l[d*2+1],v.mass=h[d],c&&(v.size=u[d]),this.nodes.push(v)}this._massArr=h,this._swingingArr=new Float32Array(f),c&&(this._sizeArr=u)},o.initEdges=function(l,h){var u=l.length/2;this.edges.length=0;for(var f=0;f<u;f++){var c=l[f*2],d=l[f*2+1],v=this.nodes[c],p=this.nodes[d];if(!v||!p){console.error("Node not exists, try initNodes before initEdges");return}v.outDegree++,p.inDegree++;var g=new n(v,p);h&&(g.weight=h[f]),this.edges.push(g)}},o.updateSettings=function(){if(this.repulsionByDegree)for(var l=0;l<this.nodes.length;l++){var h=this.nodes[l];h.mass=h.inDegree+h.outDegree+1}else for(var l=0;l<this.nodes.length;l++){var h=this.nodes[l];h.mass=this._massArr[l]}},o.update=function(){var l=this.nodes.length;if(this.updateSettings(),this.updateBBox(),this.barnesHutOptimize){this.rootRegion.setBBox(this.bbox[0],this.bbox[1],this.bbox[2],this.bbox[3]),this.rootRegion.beforeUpdate();for(var h=0;h<l;h++)this.rootRegion.addNode(this.nodes[h]);this.rootRegion.afterUpdate()}for(var h=0;h<l;h++){var u=this.nodes[h];e.copy(u.forcePrev,u.force),e.set(u.force,0,0)}for(var h=0;h<l;h++){var f=this.nodes[h];if(this.barnesHutOptimize)this.applyRegionToNodeRepulsion(this.rootRegion,f);else for(var c=h+1;c<l;c++){var d=this.nodes[c];this.applyNodeToNodeRepulsion(f,d,!1)}this.gravity>0&&(this.strongGravityMode?this.applyNodeStrongGravity(f):this.applyNodeGravity(f))}for(var h=0;h<this.edges.length;h++)this.applyEdgeAttraction(this.edges[h]);for(var v=0,p=0,g=e.create(),h=0;h<l;h++){var u=this.nodes[h],x=e.dist(u.force,u.forcePrev);v+=x*u.mass,e.add(g,u.force,u.forcePrev);var y=e.len(g)*.5;p+=y*u.mass,this._swingingArr[h]=x}var T=this.jitterTolerence*this.jitterTolerence*p/v;this._globalSpeed>0&&(T=Math.min(T/this._globalSpeed,1.5)*this._globalSpeed),this._globalSpeed=T;for(var h=0;h<l;h++){var u=this.nodes[h],x=this._swingingArr[h],w=.1*T/(1+T*Math.sqrt(x)),S=e.len(u.force);S>0&&(w=Math.min(S*w,10)/S,e.scaleAndAdd(u.position,u.position,u.force,w))}},o.applyRegionToNodeRepulsion=function(){var l=e.create();return function(u,f){if(u.node)this.applyNodeToNodeRepulsion(u.node,f,!0);else{e.sub(l,f.position,u.centerOfMass);var c=l[0]*l[0]+l[1]*l[1];if(c>this.barnesHutTheta*u.size*u.size){var d=this.scaling*f.mass*u.mass/c;e.scaleAndAdd(f.force,f.force,l,d)}else for(var v=0;v<u.nSubRegions;v++)this.applyRegionToNodeRepulsion(u.subRegions[v],f)}}}(),o.applyNodeToNodeRepulsion=function(){var l=e.create();return function(u,f,c){if(u!=f){e.sub(l,u.position,f.position);var d=l[0]*l[0]+l[1]*l[1];if(d!==0){var v;if(this.preventOverlap){var p=Math.sqrt(d);if(p=p-u.size-f.size,p>0)v=this.scaling*u.mass*f.mass/(p*p);else if(p<0)v=this.scaling*100*u.mass*f.mass;else return}else v=this.scaling*u.mass*f.mass/d;e.scaleAndAdd(u.force,u.force,l,v),e.scaleAndAdd(f.force,f.force,l,-v)}}}}(),o.applyEdgeAttraction=function(){var l=e.create();return function(u){var f=u.source,c=u.target;e.sub(l,f.position,c.position);var d=e.len(l),v;this.edgeWeightInfluence===0?v=1:this.edgeWeightInfluence===1?v=u.weight:v=Math.pow(u.weight,this.edgeWeightInfluence);var p;this.preventOverlap&&(d=d-f.size-c.size,d<=0)||(this.linLogMode?p=-v*Math.log(d+1)/(d+1):p=-v,e.scaleAndAdd(f.force,f.force,l,p),e.scaleAndAdd(c.force,c.force,l,-p))}}(),o.applyNodeGravity=function(){var l=e.create();return function(h){e.sub(l,this.gravityCenter,h.position);var u=e.len(l);e.scaleAndAdd(h.force,h.force,l,this.gravity*h.mass/(u+1))}}(),o.applyNodeStrongGravity=function(){var l=e.create();return function(h){e.sub(l,this.gravityCenter,h.position),e.scaleAndAdd(h.force,h.force,l,this.gravity*h.mass)}}(),o.updateBBox=function(){for(var l=1/0,h=1/0,u=-1/0,f=-1/0,c=0;c<this.nodes.length;c++){var d=this.nodes[c].position;l=Math.min(l,d[0]),h=Math.min(h,d[1]),u=Math.max(u,d[0]),f=Math.max(f,d[1])}this.bbox[0]=l,this.bbox[1]=h,this.bbox[2]=u,this.bbox[3]=f},o.getGlobalSpeed=function(){return this._globalSpeed};var s=null;self.onmessage=function(l){switch(l.data.cmd){case"init":s=new a,s.initNodes(l.data.nodesPosition,l.data.nodesMass,l.data.nodesSize),s.initEdges(l.data.edges,l.data.edgesWeight);break;case"updateConfig":if(s)for(var h in l.data.config)s[h]=l.data.config[h];break;case"update":var u=l.data.steps;if(s){for(var f=0;f<u;f++)s.update();for(var c=s.nodes.length,d=new Float32Array(c*2),f=0;f<c;f++){var v=s.nodes[f];d[f*2]=v.position[0],d[f*2+1]=v.position[1]}self.postMessage({buffer:d.buffer,globalSpeed:s.getGlobalSpeed()},[d.buffer])}else{var p=new Float32Array;self.postMessage({buffer:p.buffer,globalSpeed:s.getGlobalSpeed()},[p.buffer])}break}}}var Nl=El,Lt=Nl.toString();Lt=Lt.slice(Lt.indexOf("{")+1,Lt.lastIndexOf("}"));var At={barnesHutOptimize:!0,barnesHutTheta:1.5,repulsionByDegree:!0,linLogMode:!1,strongGravityMode:!1,gravity:1,scaling:1,edgeWeightInfluence:1,jitterTolerence:.1,preventOverlap:!1,dissuadeHubs:!1,gravityCenter:null},xe=function(e){for(var t in At)this[t]=At[t];if(e)for(var t in e)this[t]=e[t];this._nodes=[],this._edges=[],this._disposed=!1,this._positionTex=new W.Z({type:X.Z.FLOAT,flipY:!1,minFilter:X.Z.NEAREST,magFilter:X.Z.NEAREST})};xe.prototype.initData=function(e,t){var i=new Blob([Lt]),r=window.URL.createObjectURL(i);this._worker=new Worker(r),this._worker.onmessage=this._$onupdate.bind(this),this._nodes=e,this._edges=t,this._frame=0;for(var n=e.length,a=t.length,o=new Float32Array(n*2),s=new Float32Array(n),l=new Float32Array(n),h=new Float32Array(a*2),u=new Float32Array(a),f=0;f<e.length;f++){var c=e[f];o[f*2]=c.x,o[f*2+1]=c.y,s[f]=c.mass==null?1:c.mass,l[f]=c.size==null?1:c.size}for(var f=0;f<t.length;f++){var d=t[f],v=d.node1,p=d.node2;h[f*2]=v,h[f*2+1]=p,u[f]=d.weight==null?1:d.weight}var g=Math.ceil(Math.sqrt(e.length)),x=g,y=new Float32Array(g*x*4),T=this._positionTex;T.width=g,T.height=x,T.pixels=y,this._worker.postMessage({cmd:"init",nodesPosition:o,nodesMass:s,nodesSize:l,edges:h,edgesWeight:u}),this._globalSpeed=1/0},xe.prototype.updateOption=function(e){var t={};for(var i in At)t[i]=At[i];var r=this._nodes,n=this._edges,a=r.length;if(a>5e4?t.jitterTolerence=10:a>5e3?t.jitterTolerence=1:t.jitterTolerence=.1,a>100?t.scaling=2:t.scaling=10,a>1e3?t.barnesHutOptimize=!0:t.barnesHutOptimize=!1,e)for(var i in At)e[i]!=null&&(t[i]=e[i]);if(!t.gravityCenter){for(var o=[1/0,1/0],s=[-1/0,-1/0],l=0;l<r.length;l++)o[0]=Math.min(r[l].x,o[0]),o[1]=Math.min(r[l].y,o[1]),s[0]=Math.max(r[l].x,s[0]),s[1]=Math.max(r[l].y,s[1]);t.gravityCenter=[(o[0]+s[0])*.5,(o[1]+s[1])*.5]}for(var l=0;l<n.length;l++){var h=n[l].node1,u=n[l].node2;r[h].degree=(r[h].degree||0)+1,r[u].degree=(r[u].degree||0)+1}this._worker&&this._worker.postMessage({cmd:"updateConfig",config:t})},xe.prototype.update=function(e,t,i){t==null&&(t=1),t=Math.max(t,1),this._frame+=t,this._onupdate=i,this._worker&&this._worker.postMessage({cmd:"update",steps:Math.round(t)})},xe.prototype._$onupdate=function(e){if(!this._disposed){var t=new Float32Array(e.data.buffer);this._globalSpeed=e.data.globalSpeed,this._positionArr=t,this._updateTexture(t),this._onupdate&&this._onupdate()}},xe.prototype.getNodePositionTexture=function(){return this._positionTex},xe.prototype.getNodeUV=function(e,t){t=t||[];var i=this._positionTex.width,r=this._positionTex.height;return t[0]=e%i/(i-1),t[1]=Math.floor(e/i)/(r-1),t},xe.prototype.getNodes=function(){return this._nodes},xe.prototype.getEdges=function(){return this._edges},xe.prototype.isFinished=function(e){return this._frame>e},xe.prototype.getNodePosition=function(e,t){if(t||(t=new Float32Array(this._nodes.length*2)),this._positionArr)for(var i=0;i<this._positionArr.length;i++)t[i]=this._positionArr[i];return t},xe.prototype._updateTexture=function(e){for(var t=this._positionTex.pixels,i=0,r=0;r<e.length;)t[i++]=e[r++],t[i++]=e[r++],t[i++]=1,t[i++]=1;this._positionTex.dirty()},xe.prototype.dispose=function(e){this._disposed=!0,this._worker=null};var Sn=xe,Ol=ir.Z.extend(function(){return{zr:null,viewGL:null,minZoom:.2,maxZoom:5,_needsUpdate:!1,_dx:0,_dy:0,_zoom:1}},function(){this._mouseDownHandler=this._mouseDownHandler.bind(this),this._mouseWheelHandler=this._mouseWheelHandler.bind(this),this._mouseMoveHandler=this._mouseMoveHandler.bind(this),this._mouseUpHandler=this._mouseUpHandler.bind(this),this._update=this._update.bind(this)},{init:function(){var e=this.zr;e.on("mousedown",this._mouseDownHandler),e.on("mousewheel",this._mouseWheelHandler),e.on("globalout",this._mouseUpHandler),e.animation.on("frame",this._update)},setTarget:function(e){this._target=e},setZoom:function(e){this._zoom=Math.max(Math.min(e,this.maxZoom),this.minZoom),this._needsUpdate=!0},setOffset:function(e){this._dx=e[0],this._dy=e[1],this._needsUpdate=!0},getZoom:function(){return this._zoom},getOffset:function(){return[this._dx,this._dy]},_update:function(){if(this._target&&this._needsUpdate){var e=this._target,t=this._zoom;e.position.x=this._dx,e.position.y=this._dy,e.scale.set(t,t,t),this.zr.refresh(),this._needsUpdate=!1,this.trigger("update")}},_mouseDownHandler:function(e){if(!e.target){var t=e.offsetX,i=e.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(t,i))){this.zr.on("mousemove",this._mouseMoveHandler),this.zr.on("mouseup",this._mouseUpHandler);var r=this._convertPos(t,i);this._x=r.x,this._y=r.y}}},_convertPos:function(e,t){var i=this.viewGL.camera,r=this.viewGL.viewport;return{x:(e-r.x)/r.width*(i.right-i.left)+i.left,y:(t-r.y)/r.height*(i.bottom-i.top)+i.top}},_mouseMoveHandler:function(e){var t=this._convertPos(e.offsetX,e.offsetY);this._dx+=t.x-this._x,this._dy+=t.y-this._y,this._x=t.x,this._y=t.y,this._needsUpdate=!0},_mouseUpHandler:function(e){this.zr.off("mousemove",this._mouseMoveHandler),this.zr.off("mouseup",this._mouseUpHandler)},_mouseWheelHandler:function(e){e=e.event;var t=e.wheelDelta||-e.detail;if(t!==0){var i=e.offsetX,r=e.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(i,r))){var n=t>0?1.1:.9,a=Math.max(Math.min(this._zoom*n,this.maxZoom),this.minZoom);n=a/this._zoom;var o=this._convertPos(i,r),s=(o.x-this._dx)*(n-1),l=(o.y-this._dy)*(n-1);this._dx-=s,this._dy-=l,this._zoom=a,this._needsUpdate=!0}}},dispose:function(){var e=this.zr;e.off("mousedown",this._mouseDownHandler),e.off("mousemove",this._mouseMoveHandler),e.off("mouseup",this._mouseUpHandler),e.off("mousewheel",this._mouseWheelHandler),e.off("globalout",this._mouseUpHandler),e.animation.off("frame",this._update)}}),Il=Ol,Rl=`@export ecgl.lines2D.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec2 position: POSITION;
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;

#ifdef POSITIONTEXTURE_ENABLED
uniform sampler2D positionTexture;
#endif

void main()
{
 gl_Position = worldViewProjection * vec4(position, -10.0, 1.0);

 v_Color = a_Color;
}

@end

@export ecgl.lines2D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

void main()
{
 gl_FragColor = color * v_Color;
}
@end


@export ecgl.meshLines2D.vertex

attribute vec2 position: POSITION;
attribute vec2 normal;
attribute float offset;
attribute vec4 a_Color : COLOR;

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;

varying vec4 v_Color;
varying float v_Miter;

void main()
{
 vec4 p2 = worldViewProjection * vec4(position + normal, -10.0, 1.0);
 gl_Position = worldViewProjection * vec4(position, -10.0, 1.0);

 p2.xy /= p2.w;
 gl_Position.xy /= gl_Position.w;

 vec2 N = normalize(p2.xy - gl_Position.xy);
 gl_Position.xy += N * offset / viewport.zw * 2.0;

 gl_Position.xy *= gl_Position.w;

 v_Color = a_Color;
}
@end


@export ecgl.meshLines2D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;
varying float v_Miter;

void main()
{
 gl_FragColor = color * v_Color;
}

@end`,ei=$.Z.vec2;m.Shader.import(Rl);var zl=1,Gl=_.TA.extend({type:"graphGL",__ecgl__:!0,init:function(e,t){this.groupGL=new m.Node,this.viewGL=new Ee("orthographic"),this.viewGL.camera.left=this.viewGL.camera.right=0,this.viewGL.add(this.groupGL),this._pointsBuilder=new bt(!0,t),this._forceEdgesMesh=new m.Mesh({material:new m.Material({shader:m.createShader("ecgl.forceAtlas2.edges"),transparent:!0,depthMask:!1,depthTest:!1}),$ignorePicking:!0,geometry:new m.Geometry({attributes:{node:new m.Geometry.Attribute("node","float",2),color:new m.Geometry.Attribute("color","float",4,"COLOR")},dynamic:!0,mainAttribute:"node"}),renderOrder:-1,mode:m.Mesh.LINES}),this._edgesMesh=new m.Mesh({material:new m.Material({shader:m.createShader("ecgl.meshLines2D"),transparent:!0,depthMask:!1,depthTest:!1}),$ignorePicking:!0,geometry:new bn({useNativeLine:!1,dynamic:!0}),renderOrder:-1,culling:!1}),this._layoutId=0,this._control=new Il({zr:t.getZr(),viewGL:this.viewGL}),this._control.setTarget(this.groupGL),this._control.init(),this._clickHandler=this._clickHandler.bind(this)},render:function(e,t,i){this.groupGL.add(this._pointsBuilder.rootNode),this._model=e,this._api=i,this._initLayout(e,t,i),this._pointsBuilder.update(e,t,i),this._forceLayoutInstance instanceof Hi||this.groupGL.remove(this._forceEdgesMesh),this._updateCamera(e,i),this._control.off("update"),this._control.on("update",function(){i.dispatchAction({type:"graphGLRoam",seriesId:e.id,zoom:this._control.getZoom(),offset:this._control.getOffset()}),this._pointsBuilder.updateView(this.viewGL.camera)},this),this._control.setZoom(B.firstNotNull(e.get("zoom"),1)),this._control.setOffset(e.get("offset")||[0,0]);var r=this._pointsBuilder.getPointsMesh();if(r.off("mousemove",this._mousemoveHandler),r.off("mouseout",this._mouseOutHandler,this),i.getZr().off("click",this._clickHandler),this._pointsBuilder.highlightOnMouseover=!0,e.get("focusNodeAdjacency")){var n=e.get("focusNodeAdjacencyOn");n==="click"?i.getZr().on("click",this._clickHandler):n==="mouseover"&&(r.on("mousemove",this._mousemoveHandler,this),r.on("mouseout",this._mouseOutHandler,this),this._pointsBuilder.highlightOnMouseover=!1)}this._lastMouseOverDataIndex=-1},_clickHandler:function(e){if(!this._layouting){var t=this._pointsBuilder.getPointsMesh().dataIndex;t>=0?this._api.dispatchAction({type:"graphGLFocusNodeAdjacency",seriesId:this._model.id,dataIndex:t}):this._api.dispatchAction({type:"graphGLUnfocusNodeAdjacency",seriesId:this._model.id})}},_mousemoveHandler:function(e){if(!this._layouting){var t=this._pointsBuilder.getPointsMesh().dataIndex;t>=0?t!==this._lastMouseOverDataIndex&&this._api.dispatchAction({type:"graphGLFocusNodeAdjacency",seriesId:this._model.id,dataIndex:t}):this._mouseOutHandler(e),this._lastMouseOverDataIndex=t}},_mouseOutHandler:function(e){this._layouting||(this._api.dispatchAction({type:"graphGLUnfocusNodeAdjacency",seriesId:this._model.id}),this._lastMouseOverDataIndex=-1)},_updateForceEdgesGeometry:function(e,t){var i=this._forceEdgesMesh.geometry,r=t.getEdgeData(),n=0,a=this._forceLayoutInstance,o=r.count()*2;i.attributes.node.init(o),i.attributes.color.init(o),r.each(function(s){var l=e[s];i.attributes.node.set(n,a.getNodeUV(l.node1)),i.attributes.node.set(n+1,a.getNodeUV(l.node2));var h=ne(r,l.dataIndex),u=m.parseColor(h);u[3]*=B.firstNotNull(ae(r,l.dataIndex),1),i.attributes.color.set(n,u),i.attributes.color.set(n+1,u),n+=2}),i.dirty()},_updateMeshLinesGeometry:function(){var t=this._model.getEdgeData(),e=this._edgesMesh.geometry,t=this._model.getEdgeData(),i=this._model.getData().getLayout("points");e.resetOffset(),e.setVertexCount(t.count()*e.getLineVertexCount()),e.setTriangleCount(t.count()*e.getLineTriangleCount());var r=[],n=[],a=["lineStyle","width"];this._originalEdgeColors=new Float32Array(t.count()*4),this._edgeIndicesMap=new Float32Array(t.count()),t.each(function(o){var s=t.graph.getEdgeByIndex(o),l=s.node1.dataIndex*2,h=s.node2.dataIndex*2;r[0]=i[l],r[1]=i[l+1],n[0]=i[h],n[1]=i[h+1];var u=ne(t,s.dataIndex),f=m.parseColor(u);f[3]*=B.firstNotNull(ae(t,s.dataIndex),1);var c=t.getItemModel(s.dataIndex),d=B.firstNotNull(c.get(a),1)*this._api.getDevicePixelRatio();e.addLine(r,n,f,d);for(var v=0;v<4;v++)this._originalEdgeColors[s.dataIndex*4+v]=f[v];this._edgeIndicesMap[s.dataIndex]=o},this),e.dirty()},_updateForceNodesGeometry:function(e){for(var t=this._pointsBuilder.getPointsMesh(),i=[],r=0;r<e.count();r++)this._forceLayoutInstance.getNodeUV(r,i),t.geometry.attributes.position.set(r,i);t.geometry.dirty("position")},_initLayout:function(e,t,i){var r=e.get("layout"),n=e.getGraph(),a=e.getBoxLayoutParams(),o=(0,kt.ME)(a,{width:i.getWidth(),height:i.getHeight()});r==="force"&&(r="forceAtlas2"),this.stopLayout(e,t,i,{beforeLayout:!0});var s=e.getData(),l=e.getData();if(r==="forceAtlas2"){var h=e.getModel("forceAtlas2"),u=this._forceLayoutInstance,f=[],c=[],d=s.getDataExtent("value"),v=l.getDataExtent("value"),p=B.firstNotNull(h.get("edgeWeight"),1),g=B.firstNotNull(h.get("nodeWeight"),1);typeof p=="number"&&(p=[p,p]),typeof g=="number"&&(g=[g,g]);var x=0,y={},T=new Float32Array(s.count()*2);if(n.eachNode(function(S){var b=S.dataIndex,L=s.get("value",b),D,P;if(s.hasItemOption){var M=s.getItemModel(b);D=M.get("x"),P=M.get("y")}D==null&&(D=o.x+Math.random()*o.width,P=o.y+Math.random()*o.height),T[x*2]=D,T[x*2+1]=P,y[S.id]=x++;var E=_.Rx.linearMap(L,d,g);isNaN(E)&&(isNaN(g[0])?E=1:E=g[0]),f.push({x:D,y:P,mass:E,size:s.getItemVisual(b,"symbolSize")})}),s.setLayout("points",T),n.eachEdge(function(S){var b=S.dataIndex,L=s.get("value",b),D=_.Rx.linearMap(L,v,p);isNaN(D)&&(isNaN(p[0])?D=1:D=p[0]),c.push({node1:y[S.node1.id],node2:y[S.node2.id],weight:D,dataIndex:b})}),!u){var w=h.get("GPU");this._forceLayoutInstance&&(w&&!(this._forceLayoutInstance instanceof Hi)||!w&&!(this._forceLayoutInstance instanceof Sn))&&(this._forceLayoutInstanceToDispose=this._forceLayoutInstance),u=this._forceLayoutInstance=w?new Hi:new Sn}u.initData(f,c),u.updateOption(h.option),this._updateForceEdgesGeometry(u.getEdges(),e),this._updatePositionTexture(),i.dispatchAction({type:"graphGLStartLayout",from:this.uid})}else{var T=new Float32Array(s.count()*2),x=0;n.eachNode(function(L){var D=L.dataIndex,P,M;if(s.hasItemOption){var E=s.getItemModel(D);P=E.get("x"),M=E.get("y")}T[x++]=P,T[x++]=M}),s.setLayout("points",T),this._updateAfterLayout(e,t,i)}},_updatePositionTexture:function(){var e=this._forceLayoutInstance.getNodePositionTexture();this._pointsBuilder.setPositionTexture(e),this._forceEdgesMesh.material.set("positionTex",e)},startLayout:function(e,t,a,r){if(!(r&&r.from!=null&&r.from!==this.uid)){var n=this.viewGL,a=this._api,o=this._forceLayoutInstance,s=this._model.getData(),l=this._model.getModel("forceAtlas2");if(o&&(this.groupGL.remove(this._edgesMesh),this.groupGL.add(this._forceEdgesMesh),!!this._forceLayoutInstance)){this._updateForceNodesGeometry(e.getData()),this._pointsBuilder.hideLabels();var h=this,u=this._layoutId=zl++,f=l.getShallow("maxSteps"),c=l.getShallow("steps"),d=0,v=Math.max(c*2,20),p=function(g){if(g===h._layoutId){if(o.isFinished(f)){a.dispatchAction({type:"graphGLStopLayout",from:h.uid}),a.dispatchAction({type:"graphGLFinishLayout",points:s.getLayout("points"),from:h.uid});return}o.update(n.layer.renderer,c,function(){h._updatePositionTexture(),d+=c,d>=v&&(h._syncNodePosition(e),d=0),a.getZr().refresh(),(0,ai.Z)(function(){p(g)})})}};(0,ai.Z)(function(){h._forceLayoutInstanceToDispose&&(h._forceLayoutInstanceToDispose.dispose(n.layer.renderer),h._forceLayoutInstanceToDispose=null),p(u)}),this._layouting=!0}}},stopLayout:function(e,t,i,r){r&&r.from!=null&&r.from!==this.uid||(this._layoutId=0,this.groupGL.remove(this._forceEdgesMesh),this.groupGL.add(this._edgesMesh),this._forceLayoutInstance&&this.viewGL.layer&&(r&&r.beforeLayout||(this._syncNodePosition(e),this._updateAfterLayout(e,t,i)),this._api.getZr().refresh(),this._layouting=!1))},_syncNodePosition:function(e){var t=this._forceLayoutInstance.getNodePosition(this.viewGL.layer.renderer);e.getData().setLayout("points",t),e.setNodePosition(t)},_updateAfterLayout:function(e,t,i){this._updateMeshLinesGeometry(),this._pointsBuilder.removePositionTexture(),this._pointsBuilder.updateLayout(e,t,i),this._pointsBuilder.updateView(this.viewGL.camera),this._pointsBuilder.updateLabels(),this._pointsBuilder.showLabels()},focusNodeAdjacency:function(e,t,i,r){var n=this._model.getData();this._downplayAll();var a=r.dataIndex,o=n.graph,s=[],l=o.getNodeByIndex(a);s.push(l),l.edges.forEach(function(u){u.dataIndex<0||(u.node1!==l&&s.push(u.node1),u.node2!==l&&s.push(u.node2))},this),this._pointsBuilder.fadeOutAll(.05),this._fadeOutEdgesAll(.05),s.forEach(function(u){this._pointsBuilder.highlight(n,u.dataIndex)},this),this._pointsBuilder.updateLabels(s.map(function(u){return u.dataIndex}));var h=[];l.edges.forEach(function(u){u.dataIndex>=0&&(this._highlightEdge(u.dataIndex),h.push(u))},this),this._focusNodes=s,this._focusEdges=h},unfocusNodeAdjacency:function(e,t,i,r){this._downplayAll(),this._pointsBuilder.fadeInAll(),this._fadeInEdgesAll(),this._pointsBuilder.updateLabels()},_highlightEdge:function(e){var t=this._model.getEdgeData().getItemModel(e),i=m.parseColor(t.get("emphasis.lineStyle.color")||t.get("lineStyle.color")),r=B.firstNotNull(t.get("emphasis.lineStyle.opacity"),t.get("lineStyle.opacity"),1);i[3]*=r,this._edgesMesh.geometry.setItemColor(this._edgeIndicesMap[e],i)},_downplayAll:function(){this._focusNodes&&this._focusNodes.forEach(function(e){this._pointsBuilder.downplay(this._model.getData(),e.dataIndex)},this),this._focusEdges&&this._focusEdges.forEach(function(e){this._downplayEdge(e.dataIndex)},this)},_downplayEdge:function(e){var t=this._getColor(e,[]);this._edgesMesh.geometry.setItemColor(this._edgeIndicesMap[e],t)},_setEdgeFade:function(){var e=[];return function(t,i){this._getColor(t,e),e[3]*=i,this._edgesMesh.geometry.setItemColor(this._edgeIndicesMap[t],e)}}(),_getColor:function(e,t){for(var i=0;i<4;i++)t[i]=this._originalEdgeColors[e*4+i];return t},_fadeOutEdgesAll:function(e){var t=this._model.getData().graph;t.eachEdge(function(i){this._setEdgeFade(i.dataIndex,e)},this)},_fadeInEdgesAll:function(){this._fadeOutEdgesAll(1)},_updateCamera:function(e,t){this.viewGL.setViewport(0,0,t.getWidth(),t.getHeight(),t.getDevicePixelRatio());for(var i=this.viewGL.camera,r=e.getData(),n=r.getLayout("points"),a=ei.create(1/0,1/0),o=ei.create(-1/0,-1/0),s=[],l=0;l<n.length;)s[0]=n[l++],s[1]=n[l++],ei.min(a,a,s),ei.max(o,o,s);var h=(o[1]+a[1])/2,u=(o[0]+a[0])/2;if(!(u>i.left&&u<i.right&&h<i.bottom&&h>i.top)){var f=Math.max(o[0]-a[0],10),c=f/t.getWidth()*t.getHeight();f*=1.4,c*=1.4,a[0]-=f*.2,i.left=a[0],i.top=h-c/2,i.bottom=h+c/2,i.right=f+a[0],i.near=0,i.far=100}},dispose:function(){var e=this.viewGL.layer.renderer;this._forceLayoutInstance&&this._forceLayoutInstance.dispose(e),this.groupGL.removeAll(),this._layoutId=-1,this._pointsBuilder.dispose()},remove:function(){this.groupGL.removeAll(),this._control.dispose()}});function ti(e){return e instanceof Array||(e=[e,e]),e}function Fl(e){e.registerChartView(Gl),e.registerSeriesModel(Pl),e.registerVisual(function(i){const r={};i.eachSeriesByType("graphGL",function(n){var a=n.getCategoriesData(),o=n.getData(),s={};a.each(function(l){var h=a.getName(l);s["ec-"+h]=l;var u=a.getItemModel(l),f=u.getModel("itemStyle").getItemStyle();f.fill||(f.fill=n.getColorFromPalette(h,r)),a.setItemVisual(l,"style",f);var c=["symbol","symbolSize","symbolKeepAspect"];for(let v=0;v<c.length;v++){var d=u.getShallow(c[v],!0);d!=null&&a.setItemVisual(l,c[v],d)}}),a.count()&&o.each(function(l){var h=o.getItemModel(l);let u=h.getShallow("category");if(u!=null){typeof u=="string"&&(u=s["ec-"+u]);var f=a.getItemVisual(u,"style"),c=o.ensureUniqueItemVisual(l,"style");_.D5.extend(c,f);var d=["symbol","symbolSize","symbolKeepAspect"];for(let v=0;v<d.length;v++)o.setItemVisual(l,d[v],a.getItemVisual(u,d[v]))}})})}),e.registerVisual(function(i){i.eachSeriesByType("graphGL",function(r){var n=r.getGraph(),a=r.getEdgeData(),o=ti(r.get("edgeSymbol")),s=ti(r.get("edgeSymbolSize"));a.setVisual("drawType","stroke"),a.setVisual("fromSymbol",o&&o[0]),a.setVisual("toSymbol",o&&o[1]),a.setVisual("fromSymbolSize",s&&s[0]),a.setVisual("toSymbolSize",s&&s[1]),a.setVisual("style",r.getModel("lineStyle").getLineStyle()),a.each(function(l){var h=a.getItemModel(l),u=n.getEdgeByIndex(l),f=ti(h.getShallow("symbol",!0)),c=ti(h.getShallow("symbolSize",!0)),d=h.getModel("lineStyle").getLineStyle(),v=a.ensureUniqueItemVisual(l,"style");switch(_.D5.extend(v,d),v.stroke){case"source":{var p=u.node1.getVisual("style");v.stroke=p&&p.fill;break}case"target":{var p=u.node2.getVisual("style");v.stroke=p&&p.fill;break}}f[0]&&u.setVisual("fromSymbol",f[0]),f[1]&&u.setVisual("toSymbol",f[1]),c[0]&&u.setVisual("fromSymbolSize",c[0]),c[1]&&u.setVisual("toSymbolSize",c[1])})})}),e.registerAction({type:"graphGLRoam",event:"graphglroam",update:"series.graphGL:roam"},function(i,r){r.eachComponent({mainType:"series",query:i},function(n){n.setView(i)})});function t(){}e.registerAction({type:"graphGLStartLayout",event:"graphgllayoutstarted",update:"series.graphGL:startLayout"},t),e.registerAction({type:"graphGLStopLayout",event:"graphgllayoutstopped",update:"series.graphGL:stopLayout"},t),e.registerAction({type:"graphGLFocusNodeAdjacency",event:"graphGLFocusNodeAdjacency",update:"series.graphGL:focusNodeAdjacency"},t),e.registerAction({type:"graphGLUnfocusNodeAdjacency",event:"graphGLUnfocusNodeAdjacency",update:"series.graphGL:unfocusNodeAdjacency"},t)}(0,_.D$)(Fl);var Bl=_.wJ.extend({type:"series.flowGL",dependencies:["geo","grid","bmap"],visualStyleAccessPath:"itemStyle",getInitialData:function(e,t){var i=this.get("coordinateSystem"),r=i==="geo"?["lng","lat"]:_.wL(i)||["x","y"];r.push("vx","vy");var n=_._y.createDimensions(this.getSource(),{coordDimensions:r,encodeDefine:this.get("encode"),dimensionsDefine:this.get("dimensions")}),a=new _.aV(n,this);return a.initData(this.getSource()),a},defaultOption:{coordinateSystem:"cartesian2d",zlevel:10,supersampling:1,particleType:"point",particleDensity:128,particleSize:1,particleSpeed:1,particleTrail:2,colorTexture:null,gridWidth:"auto",gridHeight:"auto",itemStyle:{color:"#fff",opacity:.8}}}),Zl=H.Z.extend(function(){return{dynamic:!0,attributes:{position:new H.Z.Attribute("position","float",3,"POSITION")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setLineCount:function(e){var t=this.attributes,i=4*e,r=2*e;this.vertexCount!==i&&t.position.init(i),this.triangleCount!==r&&(r===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(r*3):new Uint16Array(r*3))},addLine:function(e){var t=this._vertexOffset;this.attributes.position.set(t,[e[0],e[1],1]),this.attributes.position.set(t+1,[e[0],e[1],-1]),this.attributes.position.set(t+2,[e[0],e[1],2]),this.attributes.position.set(t+3,[e[0],e[1],-2]),this.setTriangleIndices(this._faceOffset++,[t,t+1,t+2]),this.setTriangleIndices(this._faceOffset++,[t+1,t+2,t+3]),this._vertexOffset+=4}}),Hl=Zl,Vl=`@export ecgl.vfParticle.particle.fragment

uniform sampler2D particleTexture;
uniform sampler2D spawnTexture;
uniform sampler2D velocityTexture;

uniform float deltaTime;
uniform float elapsedTime;

uniform float speedScaling : 1.0;

uniform vec2 textureSize;
uniform vec4 region : [0, 0, 1, 1];
uniform float firstFrameTime;

varying vec2 v_Texcoord;


void main()
{
 vec4 p = texture2D(particleTexture, v_Texcoord);
 bool spawn = false;
 if (p.w <= 0.0) {
 p = texture2D(spawnTexture, fract(v_Texcoord + elapsedTime / 10.0));
 p.w -= firstFrameTime;
 spawn = true;
 }
 vec2 v = texture2D(velocityTexture, fract(p.xy * region.zw + region.xy)).xy;
 v = (v - 0.5) * 2.0;
 p.z = length(v);
 p.xy += v * deltaTime / 10.0 * speedScaling;
 p.w -= deltaTime;

 if (spawn || p.xy != fract(p.xy)) {
 p.z = 0.0;
 }
 p.xy = fract(p.xy);

 gl_FragColor = p;
}
@end

@export ecgl.vfParticle.renderPoints.vertex

#define PI 3.1415926

attribute vec2 texcoord : TEXCOORD_0;

uniform sampler2D particleTexture;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

uniform float size : 1.0;

varying float v_Mag;
varying vec2 v_Uv;

void main()
{
 vec4 p = texture2D(particleTexture, texcoord);

 if (p.w > 0.0 && p.z > 1e-5) {
 gl_Position = worldViewProjection * vec4(p.xy * 2.0 - 1.0, 0.0, 1.0);
 }
 else {
 gl_Position = vec4(100000.0, 100000.0, 100000.0, 1.0);
 }

 v_Mag = p.z;
 v_Uv = p.xy;

 gl_PointSize = size;
}

@end

@export ecgl.vfParticle.renderPoints.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
uniform sampler2D gradientTexture;
uniform sampler2D colorTexture;
uniform sampler2D spriteTexture;

varying float v_Mag;
varying vec2 v_Uv;

void main()
{
 gl_FragColor = color;
#ifdef SPRITETEXTURE_ENABLED
 gl_FragColor *= texture2D(spriteTexture, gl_PointCoord);
 if (color.a == 0.0) {
 discard;
 }
#endif
#ifdef GRADIENTTEXTURE_ENABLED
 gl_FragColor *= texture2D(gradientTexture, vec2(v_Mag, 0.5));
#endif
#ifdef COLORTEXTURE_ENABLED
 gl_FragColor *= texture2D(colorTexture, v_Uv);
#endif
}

@end

@export ecgl.vfParticle.renderLines.vertex

#define PI 3.1415926

attribute vec3 position : POSITION;

uniform sampler2D particleTexture;
uniform sampler2D prevParticleTexture;

uniform float size : 1.0;
uniform vec4 vp: VIEWPORT;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

varying float v_Mag;
varying vec2 v_Uv;

@import clay.util.rand

void main()
{
 vec4 p = texture2D(particleTexture, position.xy);
 vec4 p2 = texture2D(prevParticleTexture, position.xy);

 p.xy = p.xy * 2.0 - 1.0;
 p2.xy = p2.xy * 2.0 - 1.0;

 if (p.w > 0.0 && p.z > 1e-5) {
 vec2 dir = normalize(p.xy - p2.xy);
 vec2 norm = vec2(dir.y / vp.z, -dir.x / vp.w) * sign(position.z) * size;
 if (abs(position.z) == 2.0) {
 gl_Position = vec4(p.xy + norm, 0.0, 1.0);
 v_Uv = p.xy;
 v_Mag = p.z;
 }
 else {
 gl_Position = vec4(p2.xy + norm, 0.0, 1.0);
 v_Mag = p2.z;
 v_Uv = p2.xy;
 }
 gl_Position = worldViewProjection * gl_Position;
 }
 else {
 gl_Position = vec4(100000.0, 100000.0, 100000.0, 1.0);
 }
}

@end

@export ecgl.vfParticle.renderLines.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
uniform sampler2D gradientTexture;
uniform sampler2D colorTexture;

varying float v_Mag;
varying vec2 v_Uv;

void main()
{
 gl_FragColor = color;
 #ifdef GRADIENTTEXTURE_ENABLED
 gl_FragColor *= texture2D(gradientTexture, vec2(v_Mag, 0.5));
#endif
#ifdef COLORTEXTURE_ENABLED
 gl_FragColor *= texture2D(colorTexture, v_Uv);
#endif
}

@end
`;G.Z.import(Vl);function Ul(e){var t=document.createElement("canvas");t.width=t.height=e;var i=t.getContext("2d");return i.fillStyle="#fff",i.arc(e/2,e/2,e/2,0,Math.PI*2),i.fill(),t}var Vi=function(){this.motionBlurFactor=.99,this.vectorFieldTexture=new W.Z({type:X.Z.FLOAT,flipY:!1}),this.particleLife=[5,20],this._particleType="point",this._particleSize=1,this.particleColor=[1,1,1,1],this.particleSpeedScaling=1,this._thisFrameTexture=null,this._particlePass=null,this._spawnTexture=null,this._particleTexture0=null,this._particleTexture1=null,this._particlePointsMesh=null,this._surfaceFrameBuffer=null,this._elapsedTime=0,this._scene=null,this._camera=null,this._lastFrameTexture=null,this._supersampling=1,this._downsampleTextures=[],this._width=512,this._height=512,this.init()};Vi.prototype={constructor:Vi,init:function(){var e={type:X.Z.FLOAT,minFilter:X.Z.NEAREST,magFilter:X.Z.NEAREST,useMipmap:!1};this._spawnTexture=new W.Z(e),this._particleTexture0=new W.Z(e),this._particleTexture1=new W.Z(e),this._frameBuffer=new Se.Z({depthBuffer:!1}),this._particlePass=new fe.Z({fragment:G.Z.source("ecgl.vfParticle.particle.fragment")}),this._particlePass.setUniform("velocityTexture",this.vectorFieldTexture),this._particlePass.setUniform("spawnTexture",this._spawnTexture),this._downsamplePass=new fe.Z({fragment:G.Z.source("clay.compositor.downsample")});var t=new ht.Z({renderOrder:10,material:new Be.Z({shader:new G.Z(G.Z.source("ecgl.vfParticle.renderPoints.vertex"),G.Z.source("ecgl.vfParticle.renderPoints.fragment"))}),mode:ht.Z.POINTS,geometry:new H.Z({dynamic:!0,mainAttribute:"texcoord0"})}),i=new ht.Z({renderOrder:10,material:new Be.Z({shader:new G.Z(G.Z.source("ecgl.vfParticle.renderLines.vertex"),G.Z.source("ecgl.vfParticle.renderLines.fragment"))}),geometry:new Hl,culling:!1}),r=new ht.Z({material:new Be.Z({shader:new G.Z(G.Z.source("ecgl.color.vertex"),G.Z.source("ecgl.color.fragment"))}),geometry:new Xi.Z});r.material.enableTexture("diffuseMap"),this._particlePointsMesh=t,this._particleLinesMesh=i,this._lastFrameFullQuadMesh=r,this._camera=new Mt.Z,this._thisFrameTexture=new W.Z,this._lastFrameTexture=new W.Z},setParticleDensity:function(e,t){for(var i=e*t,r=new Float32Array(i*4),n=0,a=this.particleLife,o=0;o<e;o++)for(var s=0;s<t;s++,n++){r[n*4]=Math.random(),r[n*4+1]=Math.random(),r[n*4+2]=Math.random();var l=(a[1]-a[0])*Math.random()+a[0];r[n*4+3]=l}this._particleType==="line"?this._setLineGeometry(e,t):this._setPointsGeometry(e,t),this._spawnTexture.width=e,this._spawnTexture.height=t,this._spawnTexture.pixels=r,this._particleTexture0.width=this._particleTexture1.width=e,this._particleTexture0.height=this._particleTexture1.height=t,this._particlePass.setUniform("textureSize",[e,t])},_setPointsGeometry:function(e,t){var i=e*t,r=this._particlePointsMesh.geometry,n=r.attributes;n.texcoord0.init(i);for(var a=0,o=0;o<e;o++)for(var s=0;s<t;s++,a++)n.texcoord0.value[a*2]=o/e,n.texcoord0.value[a*2+1]=s/t;r.dirty()},_setLineGeometry:function(e,t){var i=e*t,r=this._getParticleMesh().geometry;r.setLineCount(i),r.resetOffset();for(var n=0;n<e;n++)for(var a=0;a<t;a++)r.addLine([n/e,a/t]);r.dirty()},_getParticleMesh:function(){return this._particleType==="line"?this._particleLinesMesh:this._particlePointsMesh},update:function(e,t,i,r){var n=this._getParticleMesh(),a=this._frameBuffer,o=this._particlePass;r&&this._updateDownsampleTextures(e,t),n.material.set("size",this._particleSize*this._supersampling),n.material.set("color",this.particleColor),o.setUniform("speedScaling",this.particleSpeedScaling),a.attach(this._particleTexture1),o.setUniform("firstFrameTime",r?(this.particleLife[1]+this.particleLife[0])/2:0),o.setUniform("particleTexture",this._particleTexture0),o.setUniform("deltaTime",i),o.setUniform("elapsedTime",this._elapsedTime),o.render(e,a),n.material.set("particleTexture",this._particleTexture1),n.material.set("prevParticleTexture",this._particleTexture0),a.attach(this._thisFrameTexture),a.bind(e),e.gl.clear(e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT);var s=this._lastFrameFullQuadMesh;s.material.set("diffuseMap",this._lastFrameTexture),s.material.set("color",[1,1,1,this.motionBlurFactor]),this._camera.update(!0),e.renderPass([s,n],this._camera),a.unbind(e),this._downsample(e),this._swapTexture(),this._elapsedTime+=i},_downsample:function(e){var t=this._downsampleTextures;if(t.length!==0)for(var i=0,r=this._thisFrameTexture,n=t[i];n;)this._frameBuffer.attach(n),this._downsamplePass.setUniform("texture",r),this._downsamplePass.setUniform("textureSize",[r.width,r.height]),this._downsamplePass.render(e,this._frameBuffer),r=n,n=t[++i]},getSurfaceTexture:function(){var e=this._downsampleTextures;return e.length>0?e[e.length-1]:this._lastFrameTexture},setRegion:function(e){this._particlePass.setUniform("region",e)},resize:function(e,t){this._lastFrameTexture.width=e*this._supersampling,this._lastFrameTexture.height=t*this._supersampling,this._thisFrameTexture.width=e*this._supersampling,this._thisFrameTexture.height=t*this._supersampling,this._width=e,this._height=t},setParticleSize:function(e){var t=this._getParticleMesh();if(e<=2){t.material.disableTexture("spriteTexture"),t.material.transparent=!1;return}this._spriteTexture||(this._spriteTexture=new W.Z),(!this._spriteTexture.image||this._spriteTexture.image.width!==e)&&(this._spriteTexture.image=Ul(e),this._spriteTexture.dirty()),t.material.transparent=!0,t.material.enableTexture("spriteTexture"),t.material.set("spriteTexture",this._spriteTexture),this._particleSize=e},setGradientTexture:function(e){var t=this._getParticleMesh().material;t[e?"enableTexture":"disableTexture"]("gradientTexture"),t.setUniform("gradientTexture",e)},setColorTextureImage:function(e,t){var i=this._getParticleMesh().material;i.setTextureImage("colorTexture",e,t,{flipY:!0})},setParticleType:function(e){this._particleType=e},clearFrame:function(e){var t=this._frameBuffer;t.attach(this._lastFrameTexture),t.bind(e),e.gl.clear(e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT),t.unbind(e)},setSupersampling:function(e){this._supersampling=e,this.resize(this._width,this._height)},_updateDownsampleTextures:function(e,t){for(var i=this._downsampleTextures,r=Math.max(Math.floor(Math.log(this._supersampling/t.getDevicePixelRatio())/Math.log(2)),0),n=2,a=this._width*this._supersampling,o=this._height*this._supersampling,s=0;s<r;s++)i[s]=i[s]||new W.Z,i[s].width=a/n,i[s].height=o/n,n*=2;for(;s<i.length;s++)i[s].dispose(e);i.length=r},_swapTexture:function(){var e=this._particleTexture0;this._particleTexture0=this._particleTexture1,this._particleTexture1=e;var e=this._thisFrameTexture;this._thisFrameTexture=this._lastFrameTexture,this._lastFrameTexture=e},dispose:function(e){e.disposeFrameBuffer(this._frameBuffer),e.disposeTexture(this.vectorFieldTexture),e.disposeTexture(this._spawnTexture),e.disposeTexture(this._particleTexture0),e.disposeTexture(this._particleTexture1),e.disposeTexture(this._thisFrameTexture),e.disposeTexture(this._lastFrameTexture),e.disposeGeometry(this._particleLinesMesh.geometry),e.disposeGeometry(this._particlePointsMesh.geometry),e.disposeGeometry(this._lastFrameFullQuadMesh.geometry),this._spriteTexture&&e.disposeTexture(this._spriteTexture),this._particlePass.dispose(e),this._downsamplePass.dispose(e),this._downsampleTextures.forEach(function(t){t.dispose(e)})}};var Wl=Vi,kl=_.TA.extend({type:"flowGL",__ecgl__:!0,init:function(e,t){this.viewGL=new Ee("orthographic"),this.groupGL=new m.Node,this.viewGL.add(this.groupGL),this._particleSurface=new Wl;var i=new m.Mesh({geometry:new m.PlaneGeometry,material:new m.Material({shader:new m.Shader({vertex:m.Shader.source("ecgl.color.vertex"),fragment:m.Shader.source("ecgl.color.fragment")}),transparent:!0})});i.material.enableTexture("diffuseMap"),this.groupGL.add(i),this._planeMesh=i},render:function(e,t,i){var r=this._particleSurface;r.setParticleType(e.get("particleType")),r.setSupersampling(e.get("supersampling")),this._updateData(e,i),this._updateCamera(i.getWidth(),i.getHeight(),i.getDevicePixelRatio());var n=B.firstNotNull(e.get("particleDensity"),128);r.setParticleDensity(n,n);var a=this._planeMesh,o=+new Date,s=this,l=!0;a.__percent=0,a.stopAnimation(),a.animate("",{loop:!0}).when(1e5,{__percent:1}).during(function(){var f=+new Date,c=Math.min(f-o,20);o=o+c,s._renderer&&(r.update(s._renderer,i,c/1e3,l),a.material.set("diffuseMap",r.getSurfaceTexture())),l=!1}).start();var h=e.getModel("itemStyle"),u=m.parseColor(h.get("color"));u[3]*=B.firstNotNull(h.get("opacity"),1),a.material.set("color",u),r.setColorTextureImage(e.get("colorTexture"),i),r.setParticleSize(e.get("particleSize")),r.particleSpeedScaling=e.get("particleSpeed"),r.motionBlurFactor=1-Math.pow(.1,e.get("particleTrail"))},updateTransform:function(e,t,i){this._updateData(e,i)},afterRender:function(e,t,i,r){var n=r.renderer;this._renderer=n},_updateData:function(e,t){var i=e.coordinateSystem,r=i.dimensions.map(function(y){return e.coordDimToDataDim(y)[0]}),n=e.getData(),a=n.getDataExtent(r[0]),o=n.getDataExtent(r[1]),s=e.get("gridWidth"),l=e.get("gridHeight");if(s==null||s==="auto"){var h=(a[1]-a[0])/(o[1]-o[0]);s=Math.round(Math.sqrt(h*n.count()))}(l==null||l==="auto")&&(l=Math.ceil(n.count()/s));var u=this._particleSurface.vectorFieldTexture,f=u.pixels;if(!f||f.length!==l*s*4)f=u.pixels=new Float32Array(s*l*4);else for(var c=0;c<f.length;c++)f[c]=0;var d=0,v=1/0,p=new Float32Array(n.count()*2),g=0,x=[[1/0,1/0],[-1/0,-1/0]];n.each([r[0],r[1],"vx","vy"],function(y,T,w,S){var b=i.dataToPoint([y,T]);p[g++]=b[0],p[g++]=b[1],x[0][0]=Math.min(b[0],x[0][0]),x[0][1]=Math.min(b[1],x[0][1]),x[1][0]=Math.max(b[0],x[1][0]),x[1][1]=Math.max(b[1],x[1][1]);var L=Math.sqrt(w*w+S*S);d=Math.max(d,L),v=Math.min(v,L)}),n.each(["vx","vy"],function(y,T,w){var S=Math.round((p[w*2]-x[0][0])/(x[1][0]-x[0][0])*(s-1)),b=l-1-Math.round((p[w*2+1]-x[0][1])/(x[1][1]-x[0][1])*(l-1)),L=(b*s+S)*4;f[L]=y/d*.5+.5,f[L+1]=T/d*.5+.5,f[L+3]=1}),u.width=s,u.height=l,e.get("coordinateSystem")==="bmap"&&this._fillEmptyPixels(u),u.dirty(),this._updatePlanePosition(x[0],x[1],e,t),this._updateGradientTexture(n.getVisual("visualMeta"),[v,d])},_fillEmptyPixels:function(e){var t=e.pixels,i=e.width,r=e.height;function n(p,g,x){p=Math.max(Math.min(p,i-1),0),g=Math.max(Math.min(g,r-1),0);var y=(g*(i-1)+p)*4;return t[y+3]===0?!1:(x[0]=t[y],x[1]=t[y+1],!0)}function a(p,g,x){x[0]=p[0]+g[0],x[1]=p[1]+g[1]}for(var o=[],s=[],l=[],h=[],u=[],f=0,c=0;c<r;c++)for(var d=0;d<i;d++){var v=(c*(i-1)+d)*4;t[v+3]===0&&(f=o[0]=o[1]=0,n(d-1,c,s)&&(f++,a(s,o,o)),n(d+1,c,l)&&(f++,a(l,o,o)),n(d,c-1,h)&&(f++,a(h,o,o)),n(d,c+1,u)&&(f++,a(u,o,o)),o[0]/=f,o[1]/=f,t[v]=o[0],t[v+1]=o[1]),t[v+3]=1}},_updateGradientTexture:function(e,t){if(!e||!e.length){this._particleSurface.setGradientTexture(null);return}this._gradientTexture=this._gradientTexture||new m.Texture2D({image:document.createElement("canvas")});var i=this._gradientTexture,r=i.image;r.width=200,r.height=1;var n=r.getContext("2d"),a=n.createLinearGradient(0,.5,r.width,.5);e[0].stops.forEach(function(o){var s;t[1]===t[0]?s=0:(s=o.value/t[1],s=Math.min(Math.max(s,0),1)),a.addColorStop(s,o.color)}),n.fillStyle=a,n.fillRect(0,0,r.width,r.height),i.dirty(),this._particleSurface.setGradientTexture(this._gradientTexture)},_updatePlanePosition:function(e,t,i,r){var n=this._limitInViewportAndFullFill(e,t,i,r);e=n.leftTop,t=n.rightBottom,this._particleSurface.setRegion(n.region),this._planeMesh.position.set((e[0]+t[0])/2,r.getHeight()-(e[1]+t[1])/2,0);var a=t[0]-e[0],o=t[1]-e[1];this._planeMesh.scale.set(a/2,o/2,1),this._particleSurface.resize(Math.max(Math.min(a,2048),1),Math.max(Math.min(o,2048),1)),this._renderer&&this._particleSurface.clearFrame(this._renderer)},_limitInViewportAndFullFill:function(e,t,i,r){var n=[Math.max(e[0],0),Math.max(e[1],0)],a=[Math.min(t[0],r.getWidth()),Math.min(t[1],r.getHeight())];if(i.get("coordinateSystem")==="bmap"){var o=i.getData().getDataExtent(i.coordDimToDataDim("lng")[0]),s=Math.floor(o[1]-o[0])>=359;s&&(n[0]>0&&(n[0]=0),a[0]<r.getWidth()&&(a[0]=r.getWidth()))}var l=t[0]-e[0],h=t[1]-e[1],u=a[0]-n[0],f=a[1]-n[1],c=[(n[0]-e[0])/l,1-f/h-(n[1]-e[1])/h,u/l,f/h];return{leftTop:n,rightBottom:a,region:c}},_updateCamera:function(e,t,i){this.viewGL.setViewport(0,0,e,t,i);var r=this.viewGL.camera;r.left=r.bottom=0,r.top=t,r.right=e,r.near=0,r.far=100,r.position.z=10},remove:function(){this._planeMesh.stopAnimation(),this.groupGL.removeAll()},dispose:function(){this._renderer&&this._particleSurface.dispose(this._renderer),this.groupGL.removeAll()}});function jl(e){e.registerChartView(kl),e.registerSeriesModel(Bl)}(0,_.D$)(jl);var Dn=A(70324),Ui=_.wJ.extend({type:"series.linesGL",dependencies:["grid","geo"],visualStyleAccessPath:"lineStyle",visualDrawType:"stroke",streamEnabled:!0,init:function(e){var t=this._processFlatCoordsArray(e.data);this._flatCoords=t.flatCoords,this._flatCoordsOffset=t.flatCoordsOffset,t.flatCoords&&(e.data=new Float32Array(t.count)),Ui.superApply(this,"init",arguments)},mergeOption:function(e){var t=this._processFlatCoordsArray(e.data);this._flatCoords=t.flatCoords,this._flatCoordsOffset=t.flatCoordsOffset,t.flatCoords&&(e.data=new Float32Array(t.count)),Ui.superApply(this,"mergeOption",arguments)},appendData:function(e){var t=this._processFlatCoordsArray(e.data);t.flatCoords&&(this._flatCoords?(this._flatCoords=(0,Dn.WW)(this._flatCoords,t.flatCoords),this._flatCoordsOffset=(0,Dn.WW)(this._flatCoordsOffset,t.flatCoordsOffset)):(this._flatCoords=t.flatCoords,this._flatCoordsOffset=t.flatCoordsOffset),e.data=new Float32Array(t.count)),this.getRawData().appendData(e.data)},_getCoordsFromItemModel:function(e){var t=this.getData().getItemModel(e),i=t.option instanceof Array?t.option:t.getShallow("coords");return i},getLineCoordsCount:function(e){return this._flatCoordsOffset?this._flatCoordsOffset[e*2+1]:this._getCoordsFromItemModel(e).length},getLineCoords:function(e,t){if(this._flatCoordsOffset){for(var i=this._flatCoordsOffset[e*2],r=this._flatCoordsOffset[e*2+1],n=0;n<r;n++)t[n]=t[n]||[],t[n][0]=this._flatCoords[i+n*2],t[n][1]=this._flatCoords[i+n*2+1];return r}else{for(var a=this._getCoordsFromItemModel(e),n=0;n<a.length;n++)t[n]=t[n]||[],t[n][0]=a[n][0],t[n][1]=a[n][1];return a.length}},_processFlatCoordsArray:function(e){var t=0;if(this._flatCoords&&(t=this._flatCoords.length),typeof e[0]=="number"){for(var i=e.length,r=new Uint32Array(i),n=new Float64Array(i),a=0,o=0,s=0,l=0;l<i;){s++;var h=e[l++];r[o++]=a+t,r[o++]=h;for(var u=0;u<h;u++){var f=e[l++],c=e[l++];n[a++]=f,n[a++]=c,l>i}}return{flatCoordsOffset:new Uint32Array(r.buffer,0,o),flatCoords:n,count:s}}return{flatCoordsOffset:null,flatCoords:null,count:e.length}},getInitialData:function(e,t){var i=new _.aV(["value"],this);return i.hasItemOption=!1,i.initData(e.data,[],function(r,n,a,o){if(r instanceof Array)return NaN;i.hasItemOption=!0;var s=r.value;if(s!=null)return s instanceof Array?s[o]:s}),i},defaultOption:{coordinateSystem:"geo",zlevel:10,progressive:1e4,progressiveThreshold:5e4,blendMode:"source-over",lineStyle:{opacity:.8},postEffect:{enable:!1,colorCorrection:{exposure:0,brightness:0,contrast:1,saturation:1,enable:!0}}}}),Xl=Ui,Yl=_.TA.extend({type:"linesGL",__ecgl__:!0,init:function(e,t){this.groupGL=new m.Node,this.viewGL=new Ee("orthographic"),this.viewGL.add(this.groupGL),this._glViewHelper=new yn(this.viewGL),this._nativeLinesShader=m.createShader("ecgl.lines3D"),this._meshLinesShader=m.createShader("ecgl.meshLines3D"),this._linesMeshes=[],this._currentStep=0},render:function(e,t,i){this.groupGL.removeAll(),this._glViewHelper.reset(e,i);var r=this._linesMeshes[0];r||(r=this._linesMeshes[0]=this._createLinesMesh(e)),this._linesMeshes.length=1,this.groupGL.add(r),this._updateLinesMesh(e,r,0,e.getData().count()),this.viewGL.setPostEffect(e.getModel("postEffect"),i)},incrementalPrepareRender:function(e,t,i){this.groupGL.removeAll(),this._glViewHelper.reset(e,i),this._currentStep=0,this.viewGL.setPostEffect(e.getModel("postEffect"),i)},incrementalRender:function(e,t,i,r){var n=this._linesMeshes[this._currentStep];n||(n=this._createLinesMesh(t),this._linesMeshes[this._currentStep]=n),this._updateLinesMesh(t,n,e.start,e.end),this.groupGL.add(n),r.getZr().refresh(),this._currentStep++},updateTransform:function(e,t,i){e.coordinateSystem.getRoamTransform&&this._glViewHelper.updateTransform(e,i)},_createLinesMesh:function(e){var t=new m.Mesh({$ignorePicking:!0,material:new m.Material({shader:m.createShader("ecgl.lines3D"),transparent:!0,depthMask:!1,depthTest:!1}),geometry:new bn({segmentScale:10,useNativeLine:!0,dynamic:!1}),mode:m.Mesh.LINES,culling:!1});return t},_updateLinesMesh:function(e,t,i,r){var n=e.getData();t.material.blend=e.get("blendMode")==="lighter"?m.additiveBlend:null;var a=e.get("lineStyle.curveness")||0,o=e.get("polyline"),s=t.geometry,l=e.coordinateSystem,h=B.firstNotNull(e.get("lineStyle.width"),1);h>1?(t.material.shader!==this._meshLinesShader&&t.material.attachShader(this._meshLinesShader),t.mode=m.Mesh.TRIANGLES):(t.material.shader!==this._nativeLinesShader&&t.material.attachShader(this._nativeLinesShader),t.mode=m.Mesh.LINES),i=i||0,r=r||n.count(),s.resetOffset();var u=0,f=0,c=[],d=[],v=[],p=[],g=[],x=.3,y=.7;function T(){d[0]=c[0]*y+p[0]*x-(c[1]-p[1])*a,d[1]=c[1]*y+p[1]*x-(p[0]-c[0])*a,v[0]=c[0]*x+p[0]*y-(c[1]-p[1])*a,v[1]=c[1]*x+p[1]*y-(p[0]-c[0])*a}if(o||a!==0)for(var w=i;w<r;w++)if(o){var S=e.getLineCoordsCount(w);u+=s.getPolylineVertexCount(S),f+=s.getPolylineTriangleCount(S)}else e.getLineCoords(w,g),this._glViewHelper.dataToPoint(l,g[0],c),this._glViewHelper.dataToPoint(l,g[1],p),T(),u+=s.getCubicCurveVertexCount(c,d,v,p),f+=s.getCubicCurveTriangleCount(c,d,v,p);else{var b=r-i;u+=b*s.getLineVertexCount(),f+=b*s.getLineVertexCount()}s.setVertexCount(u),s.setTriangleCount(f);for(var L=i,D=[],w=i;w<r;w++){m.parseColor(ne(n,L),D);var P=B.firstNotNull(ae(n,L),1);D[3]*=P;for(var S=e.getLineCoords(w,g),M=0;M<S;M++)this._glViewHelper.dataToPoint(l,g[M],g[M]);o?s.addPolyline(g,D,h,0,S):a!==0?(c=g[0],p=g[1],T(),s.addCubicCurve(c,d,v,p,D,h)):s.addPolyline(g,D,h,0,2),L++}},dispose:function(){this.groupGL.removeAll()},remove:function(){this.groupGL.removeAll()}});function Ql(e){e.registerChartView(Yl),e.registerSeriesModel(Xl)}(0,_.D$)(Ql)}}]);
