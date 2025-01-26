import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

const Background = () => {
  const containerRef = useRef()
  const [height, setHeight] = useState(window.innerHeight)

  useEffect(() => {
    const container = containerRef.current
    const scene = new THREE.Scene()
    const width = window.innerWidth

    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(width, height)
    renderer.setPixelRatio(window.devicePixelRatio)
    container.appendChild(renderer.domElement)

    const camera = new THREE.PerspectiveCamera(70, width / height, 0.1, 1000)
    camera.position.set(0, 0, 10)

    const backgroundGeometry = new THREE.BufferGeometry()
    const particleCount = 2000
    const backgroundPositions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      backgroundPositions[i * 3] = (Math.random() - 0.5) * 100
      backgroundPositions[i * 3 + 1] = (Math.random() - 0.5) * 100
      backgroundPositions[i * 3 + 2] = (Math.random() - 0.5) * 100
    }
    backgroundGeometry.setAttribute('position', new THREE.BufferAttribute(backgroundPositions, 3))

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0xffffff,
      transparent: true,
    })

    const backgroundParticles = new THREE.Points(backgroundGeometry, particleMaterial)
    scene.add(backgroundParticles)

    const trailGeometry = new THREE.BufferGeometry()
    const maxTrailParticles = 30
    const trailPositions = new Float32Array(maxTrailParticles * 3).fill(0)
    trailGeometry.setAttribute('position', new THREE.BufferAttribute(trailPositions, 3))

    const trailMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0xffffff,
      transparent: true,
      opacity: 0.8,
    })

    const trailParticles = new THREE.Points(trailGeometry, trailMaterial)
    scene.add(trailParticles)

    let trailIndex = 0

    let mouseX = 0
    let mouseY = 0

    const onMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1

      const trailPos = trailGeometry.attributes.position.array
      trailPos[trailIndex * 3] = mouseX * 20
      trailPos[trailIndex * 3 + 1] = mouseY * 20
      trailPos[trailIndex * 3 + 2] = -5
      trailIndex = (trailIndex + 1) % maxTrailParticles
      trailGeometry.attributes.position.needsUpdate = true
    }

    window.addEventListener('mousemove', onMouseMove)

    const animate = () => {
      requestAnimationFrame(animate)

      backgroundParticles.rotation.y += 0.001 * mouseX
      backgroundParticles.rotation.x += 0.001 * mouseY

      renderer.render(scene, camera)
    }

    animate()

    const resize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }

    const onScroll = () => {
      setHeight(window.innerHeight + window.scrollY) // Учитываем прокрутку страницы
    }

    window.addEventListener('resize', resize)
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', onScroll)
      container.removeChild(renderer.domElement)
    }
  }, [height])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: `${height}px`, // Устанавливаем динамическую высоту
        zIndex: -1,
      }}
    />
  )
}

export default Background
